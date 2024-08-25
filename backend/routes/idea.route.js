import express from 'express';
import { verifyToken } from '../utils/verifyUser.js'
import { create, getIdeas, getIdeaByUser, deleteIdea, updateIdea } from '../controllers/ideas.controller.js';

const router = express.Router();

router.post("/create", verifyToken, create);
router.get("/getIdeas", getIdeas);
router.get('/user-ideas', verifyToken, getIdeaByUser);
router.delete('/deleteideas/:ideaId/:userId', verifyToken, deleteIdea);
router.put('/updateIdea/:ideaId/:userId', verifyToken, updateIdea);

export default router;