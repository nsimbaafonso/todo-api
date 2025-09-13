import prisma from "../prismaClient.js";

export const create = (data) => prisma.task.create({ data });
export const findAll = () => prisma.task.findMany();
export const findById = (id) => prisma.task.findUnique({ where: { id } });
export const update = (id, data) => prisma.task.update({ where: { id }, data });
export const remove = (id) => prisma.task.delete({ where: { id } });
