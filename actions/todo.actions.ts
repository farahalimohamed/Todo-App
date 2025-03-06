"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTodoListAction = async () => {
  return await prisma.todo.findMany();
  // ** Error handling
};
export const createTodoListAction = async () => {};
export const updateTodoListAction = async () => {};
export const deleteTodoListAction = async () => {};
