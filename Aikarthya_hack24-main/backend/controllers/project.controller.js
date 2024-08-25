import Project from '../models/project.model.js';

export const create = async(req,res) => {
    try {
        if (!req.user) {
            return res.status(401).json({ error: "Unauthorized: You must be logged in to create a project." });
        }
        if (!req.body.title || !req.body.content || !req.body.keywords) {
            return res.status(400).json({message: "Please provide all required fields"});
        }
        
        const keywords = req.body.keywords.split(',').map(keyword => keyword.trim().toLowerCase());

        const slug = req.body.title.split(' ').join('-').toLowerCase().replace(/[^a-zA-Z0-9-]/g, '');
        const newProject = new Project({
            ...req.body,
            slug,
            keywords,
            author: req.user.userId,
        });
        const savedProject = await newProject.save();
        res.status(201).json(savedProject);
    } catch (error) { 
        console.error("Error creating Project:", error);
        res.status(500).json({ message: error.message });
    }
}

export const getProjects = async (req, res) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.order === "asc" ? 1 : -1;
    const query = {
      ...(req.query.userId && { author: req.query.userId }),
      ...(req.query.slug && { slug: req.query.slug }),
      ...(req.query.ProjectId && { _id: req.query.ProjectId }),
      ...(req.query.searchTerm && {
        $or: [
          { title: { $regex: req.query.searchTerm, $options: "i" } },
          { content: { $regex: req.query.searchTerm, $options: "i" } },
          { keywords: { $regex: req.query.searchTerm, $options: "i" } },
        ],
      }),
    };


    const Projects = await Project.find(query)
      .populate('author', 'username')
      .sort({ updatedAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    const totalProjects = await Project.countDocuments(query);

    const now = new Date();
    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );

    const lastMonthProjects = await Project.countDocuments({
      ...query,
      createdAt: { $gte: oneMonthAgo },
    });

    res.status(200).json({
      Projects,
      totalProjects,
      lastMonthProjects,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
  


export const getProjectsByUser = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({ error: "Unauthorized: You must be logged in to view your Projects." });
        }

        const startIndex = parseInt(req.query.startIndex) || 0;
        const limit = parseInt(req.query.limit) || 9;
        const sortDirection = req.query.order === 'asc' ? 1 : -1;

        // Filter Projects based on the authenticated user's ID
        const Projects = await Project.find({ author: req.user.userId })
            .sort({ updatedAt: sortDirection })
            .skip(startIndex)
            .limit(limit);

        const totalProjects = await Project.countDocuments({ author: req.user.userId });

        const now = new Date();
        const oneMonthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
        const lastMonthProjects = await Project.countDocuments({
            author: req.user.userId,
            createdAt: { $gte: oneMonthAgo },
        });

        res.status(200).json({
            Projects,
            totalProjects,
            lastMonthProjects,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteProject = async(req,res)=>{
    if(req.user.userId !== req.params.userId){
        return res.status(403).json("You are not allowed to delete this Project");
    }
    try {
        await Project.findByIdAndDelete(req.params.ProjectId);
        res.status(200).json("The Project has been deleted");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateProject = async (req, res) => {
    if (req.user.userId !== req.params.userId) {
      return res.status(403).json("You are not allowed to update this Project");
    }
    try {
      const updateData = {
        title: req.body.title,
        content: req.body.content,
        file: req.body.file,
      };
  
      if (req.body.keywords) {
        if (typeof req.body.keywords === 'string') {
          updateData.keywords = req.body.keywords.split(',').map(keyword => keyword.trim().toLowerCase());
        } else if (Array.isArray(req.body.keywords)) {
          updateData.keywords = req.body.keywords.map(keyword => keyword.toLowerCase());
        }
      }
  
      const updatedProject = await Project.findByIdAndUpdate(
        req.params.ProjectId,
        { $set: updateData },
        { new: true }
      );
  
      res.status(200).json(updatedProject);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  export const sendCollaborationRequest = async (req, res) => {
    try {
      const { projectId, userId } = req.body;
  
      const project = await Project.findById(projectId);
      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }
  
      if (project.collaborators.some(collab => collab.user.equals(userId))) {
        return res.status(400).json({ message: "User is already a collaborator" });
      }
  
      if (project.collaborationRequests.some(req => req.user.equals(userId))) {
        return res.status(400).json({ message: "Request already sent" });
      }
  
      project.collaborationRequests.push({ user: userId, status: 'PENDING' });
      await project.save();
  
      res.status(200).json({ message: "Collaboration request sent" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export const handleCollaborationRequest = async (req, res) => {
    try {
      const { projectId, userId, action } = req.body;
  
      const project = await Project.findById(projectId);
      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }
  
      const requestIndex = project.collaborationRequests.findIndex(req => req.user.equals(userId));
      if (requestIndex === -1) {
        return res.status(404).json({ message: "Request not found" });
      }
  
      if (action === 'accept') {
        project.collaborators.push({ user: userId, status: 'ACCEPTED' });
        project.collaborationRequests[requestIndex].status = 'ACCEPTED';
      } else if (action === 'reject') {
        project.collaborationRequests[requestIndex].status = 'REJECTED';
      } else {
        return res.status(400).json({ message: "Invalid action" });
      }
  
      await project.save();
  
      res.status(200).json({ message: `Request ${action}ed successfully` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export const getCollaborationNotifications = async (req, res) => {
    console.log(req.user);
    try {
      if (!req.user) {
        return res.status(401).json({ message: "Unauthorized: You must be logged in to view notifications." });
      }
  
      // Find all projects authored by the logged-in user
      const projects = await Project.find({ author: req.user.userId });
      console.log(projects);
  
      // Filter projects with pending collaboration requests
      const notifications = projects
        .filter(project => project.collaborationRequests.some(req => req.status === 'PENDING'))
        .map(project => ({
          projectId: project._id,
          projectName: project.title,
          requests: project.collaborationRequests.filter(req => req.status === 'PENDING').map(req => ({
            userId: req.user,
            status: req.status,
          }))
        }));
  
      res.status(200).json({ notifications });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  