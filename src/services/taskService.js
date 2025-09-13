import * as TaskModel from "../models/taskModel.js";

export const createTask = async (title, description) => {
  if (!title) throw new Error("Título é obrigatório");
  return TaskModel.create({ title, description });
};

export const getTasks = async () => TaskModel.findAll();
export const getTask = async (id) => TaskModel.findById(id);
export const updateTask = async (id, data) => TaskModel.update(id, data);
export const deleteTask = async (id) => TaskModel.remove(id);
