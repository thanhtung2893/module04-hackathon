import { Request, Response } from 'express';
import * as taskService from '../services/taskService';
import { log } from 'console';

export const getAllTasksController = async (req: Request, res: Response) => {
    try {
        const tasks = await taskService.getAllTasksService();
        res.json(tasks);
    } catch (error) {
        console.log(error);

    };
}

export const getTaskByIdController = async (req: Request, res: Response) => {
    const taskId = Number(req.params.id);

    try {
        const task = await taskService.getTaskByIdService(taskId);

        if (!task) {
            res.status(404).json({ error: 'khong co nhiem vu nay' });
        } else {
            res.json(task);
        }
    } catch (error) {
        log(error);
    }
};

export const createTaskController = async (req: Request, res: Response) => {
    const { name, completed } = req.body as { name: string; completed: boolean };

    try {
        const createdTask = await taskService.createTaskService(name, completed);
        res.status(201).json(createdTask);
    } catch (error) {
        log(error);
    }
};

export const updateTaskController = async (req: Request, res: Response) => {
    const taskId = Number(req.params.id);
    const { name, completed } = req.body as { name: string; completed: boolean };

    try {
        const updatedTask = await taskService.updateTaskService(taskId, name, completed);

        if (!updatedTask) {
            res.status(404).json({ error: 'khong co nhiem vu nay' });
        } else {
            res.json(updatedTask);
        }
    } catch (error) {
        log(error);
    }
};

export const deleteTaskController = async (req: Request, res: Response) => {
    const taskId = Number(req.params.id);
    try {
        await taskService.deleteTaskService(taskId);

    }
    catch (error) {
        log(error);
    }
}
