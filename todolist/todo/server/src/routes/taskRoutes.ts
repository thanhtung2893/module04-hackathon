import express from 'express';
import * as taskController from '../controller/taskController';

const router = express.Router();

router.get('/api/v1/task', taskController.getAllTasksController);
router.get('/api/v1/task/:id', taskController.getTaskByIdController);
router.post('/api/v1/task', taskController.createTaskController);
router.put('/api/v1/task/:id', taskController.updateTaskController);
router.delete('/api/v1/task/:id', taskController.deleteTaskController);

export default router;
