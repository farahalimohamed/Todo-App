"use server";
import { ITodo } from "@/interfaces";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const getTodoListAction = async () => {
  return await prisma.todo.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  // ** Error handling
};
export const createTodoAction = async ({
  title,
  body,
  completed,
}: {
  title: string;
  body?: string | undefined;
  completed: boolean;
}) => {
  await prisma.todo.create({
    data: {
      title,
      body,
      completed,
    },
  });

  revalidatePath("/");
  // ** Error handling
};
export const updateTodoAction = async ({
  id,
  title,
  body,
  completed,
}: ITodo) => {
  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      title: title,
      body: body,
      completed: completed,
    },
  });
  revalidatePath("/");
  // ** Error handling
};
export const deleteTodoAction = async ({ id }: { id: string }) => {
  await prisma.todo.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
  // ** Error handling
};
