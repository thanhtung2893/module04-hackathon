import mysql from "mysql2/promise"
import pool from '../utils/database';

interface Task {
  id: number;
  name: string;
  completed: boolean;
}


export const getAllTasksService =  ()=> {
  const all=mysql.createPool(pool);
  return all.execute('SELECT * FROM task');
};

export const getTaskByIdService = async (id: number) => {
const all=mysql.createPool(pool);
const [result]=await all.execute('SELECT * FROM task WHERE id = ?', [id]);
return result;
};

export const createTaskService = async (name: string, completed: boolean) => {
  const all=mysql.createPool(pool);
 const [result]=await all.execute('INSERT INTO task (name, completed) VALUES (?, ?)', [name, completed]);
 return result;
};

export const updateTaskService = async (id: number, name: string, completed: boolean) => {
  const updatedTask: Task = {
    id,
    name,
    completed,
  };
  const all=mysql.createPool(pool);
  const [result]=await all.execute('UPDATE task SET name = ?, completed = ? WHERE id = ?', [updatedTask.name,updatedTask.completed, updatedTask.id]);
  return result;
};

export const deleteTaskService = async (id: number) => {
 const all=mysql.createPool(pool);
 const [result]=await all.execute('DELETE FROM task WHERE id = ?', [id]);
 return result;
};
