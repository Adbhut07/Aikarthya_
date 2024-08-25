import express from 'express';
import { verifyToken } from '../utils/verifyUser.js'
import { create, getProjects, getProjectsByUser, deleteProject, updateProject, sendCollaborationRequest, handleCollaborationRequest, getCollaborationNotifications } from '../controllers/project.controller.js';

const router = express.Router();

router.post("/create", verifyToken, create);
router.get("/getprojects", getProjects);
router.get('/user-projects', verifyToken, getProjectsByUser);
router.delete('/deleteproject/:projectId/:userId', verifyToken, deleteProject);
router.put('/updateproject/:projectId/:userId', verifyToken, updateProject);
router.post('/collaborate',verifyToken, sendCollaborationRequest);
router.post('/collaborate/handle',verifyToken, handleCollaborationRequest);
router.get('/notifications/collaborations',verifyToken, getCollaborationNotifications);

export default router;