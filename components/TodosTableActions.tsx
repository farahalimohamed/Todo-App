"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import Spinner from "./Spinner";
import { deleteTodoAction } from "@/actions/todo.actions";
import { ITodo } from "@/interfaces";
import TodoForm from "./TodoForm";

const TodosTableActions = ({ todo }: { todo: ITodo }) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <TodoForm mode="edit" todo={todo} />
      <Button
        variant={"destructive"}
        size={"icon"}
        onClick={async () => {
          setLoading(true);
          await deleteTodoAction({ id: todo?.id as string });
          setLoading(false);
        }}
      >
        {loading ? <Spinner /> : <Trash size={16} />}
      </Button>
    </>
  );
};

export default TodosTableActions;
