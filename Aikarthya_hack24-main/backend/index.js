import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.route.js'
import connectToMongoDB from './db/db.js';
import userRoutes from './routes/user.route.js'
import projectRoutes from './routes/project.route.js'
import commentRoutes from './routes/comment.route.js'
import ideaRoutes from './routes/idea.route.js'

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/project",projectRoutes);
app.use("/api/cemments", commentRoutes);
app.use('/api/ideas', ideaRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});

app.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`server is running on port ${PORT}`);
})