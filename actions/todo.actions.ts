"use server";
import { ITodo } from "@/interfaces";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const getUserTodoListAction = async ({
  userId,
}: {
  userId: string | null;
}) => {
  try {
    return await prisma.todo.findMany({
      where: {
        userId: userId as string,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error) {
    throw new Error("Failed to fetch todos");
  }
};
export const createTodoAction = async ({
  title,
  body,
  completed,
  userId,
}: {
  title: string;
  body?: string | undefined;
  completed: boolean;
  userId: string | null;
}) => {
  try {
    await prisma.todo.create({
      data: {
        title,
        body,
        completed,
        userId: userId as string,
      },
    });
    revalidatePath("/");
  } catch (error) {
    throw new Error("Failed to create todo");
  }
};

export const updateTodoAction = async ({
  id,
  title,
  body,
  completed,
}: ITodo) => {
  try {
    await prisma.todo.update({
      where: {
        id,
      },
      data: {
        title,
        body,
        completed,
      },
    });
    revalidatePath("/");
  } catch (error) {
    throw new Error("Failed to update todo");
  }
};

export const deleteTodoAction = async ({ id }: { id: string }) => {
  try {
    await prisma.todo.delete({
      where: {
        id,
      },
    });
    revalidatePath("/");
  } catch (error) {
    throw new Error("Failed to delete todo");
  }
};
