import * as TaskService from "../services/taskService.js";

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = await TaskService.createTask(title, description);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getTasks = async (req, res) => {
  const tasks = await TaskService.getTasks();
  res.json(tasks);
};

export const getTask = async (req, res) => {
  const { id } = req.params;
  const task = await TaskService.getTask(Number(id));
  if (!task) return res.status(404).json({ error: "Task não encontrada" });
  res.json(task);
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await TaskService.updateTask(Number(id), req.body);
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await TaskService.deleteTask(Number(id));
    res.json({ message: "Task deletada com sucesso" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
