"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTodoListAction = async () => {
  return await prisma.todo.findMany();
  // ** Error handling
};
export const createTodoAction = async ({title, body, completed} :{title:string, body?: string | undefined, completed:boolean}) => {
  await prisma.todo.create({
    data: {
      title,
      body,
      completed
    },
  });
  // ** Error handling
};
export const updateTodoAction = async () => {};
export const deleteTodoAction = async () => {};
