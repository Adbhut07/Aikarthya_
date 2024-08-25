import Idea from '../models/ideas.model.js';

export const create = async(req,res) => {
    try {
        if (!req.user) {
            return res.status(401).json({ error: "Unauthorized: You must be logged in to create a idea." });
        }
        if (!req.body.title || !req.body.content || !req.body.keywords) {
            return res.status(400).json({message: "Please provide all required fields"});
        }
        
        const keywords = req.body.keywords.split(',').map(keyword => keyword.trim().toLowerCase());

        const slug = req.body.title.split(' ').join('-').toLowerCase().replace(/[^a-zA-Z0-9-]/g, '');
        const newIdea = new Idea({
            ...req.body,
            slug,
            keywords,
            author: req.user.userId,
        });
        const savedIdea = await newIdea.save();
        res.status(201).json(savedIdea);
    } catch (error) { 
        console.error("Error creating Project:", error);
        res.status(500).json({ message: error.message });
    }
}

export const getIdeas = async (req, res) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.order === "asc" ? 1 : -1;
    const query = {
      ...(req.query.userId && { author: req.query.userId }),
      ...(req.query.slug && { slug: req.query.slug }),
      ...(req.query.ideaId && { _id: req.query.ideaId }),
      ...(req.query.searchTerm && {
        $or: [
          { title: { $regex: req.query.searchTerm, $options: "i" } },
          { content: { $regex: req.query.searchTerm, $options: "i" } },
          { keywords: { $regex: req.query.searchTerm, $options: "i" } },
        ],
      }),
    };


    const Ideas = await Idea.find(query)
      .populate('author', 'username')
      .sort({ updatedAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    const totalIdeas = await Idea.countDocuments(query);

    const now = new Date();
    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );

    const lastMonthIdeas = await Project.countDocuments({
      ...query,
      createdAt: { $gte: oneMonthAgo },
    });

    res.status(200).json({
      Ideas,
      totalIdeas,
      lastMonthIdeas,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
  


export const getIdeaByUser = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({ error: "Unauthorized: You must be logged in to view your idea." });
        }

        const startIndex = parseInt(req.query.startIndex) || 0;
        const limit = parseInt(req.query.limit) || 9;
        const sortDirection = req.query.order === 'asc' ? 1 : -1;

        // Filter Projects based on the authenticated user's ID
        const Ideas = await Idea.find({ author: req.user.userId })
            .sort({ updatedAt: sortDirection })
            .skip(startIndex)
            .limit(limit);

        const totalIdeas = await Idea.countDocuments({ author: req.user.userId });

        const now = new Date();
        const oneMonthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
        const lastMonthIdeas = await Idea.countDocuments({
            author: req.user.userId,
            createdAt: { $gte: oneMonthAgo },
        });

        res.status(200).json({
            Ideas,
            totalIdeas,
            lastMonthIdeas,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteIdea = async(req,res)=>{
    if(req.user.userId !== req.params.userId){
        return res.status(403).json("You are not allowed to delete this Idea");
    }
    try {
        await Idea.findByIdAndDelete(req.params.ideaId);
        res.status(200).json("The Project has been deleted");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateIdea = async (req, res) => {
    if (req.user.userId !== req.params.userId) {
      return res.status(403).json("You are not allowed to update this Idea");
    }
    try {
      const updateData = {
        title: req.body.title,
        content: req.body.content,
      };
  
      if (req.body.keywords) {
        if (typeof req.body.keywords === 'string') {
          updateData.keywords = req.body.keywords.split(',').map(keyword => keyword.trim().toLowerCase());
        } else if (Array.isArray(req.body.keywords)) {
          updateData.keywords = req.body.keywords.map(keyword => keyword.toLowerCase());
        }
      }
  
      const updatedProject = await Idea.findByIdAndUpdate(
        req.params.ProjectId,
        { $set: updateData },
        { new: true }
      );
  
      res.status(200).json(updatedProject);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  