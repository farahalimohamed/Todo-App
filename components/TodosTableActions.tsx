"use client";
import { useState } from 'react'
import { Button } from './ui/button';
import { Pen, Trash } from 'lucide-react';
import Spinner from './Spinner';
import { deleteTodoAction } from '@/actions/todo.actions';

const TodosTableActions = ({id}:{id:string}) => {
    const [loading, setLoading] = useState(false);
  return (
    <>
      <Button size={"icon"}>
        <Pen size={16} />
      </Button>
      <Button
        variant={"destructive"}
        size={"icon"}
        onClick={async () => {
          setLoading(true);
          await deleteTodoAction({ id });
          setLoading(false);
        }}
      >
        {loading ? <Spinner /> : <Trash size={16} />}
      </Button>
    </>
  );
}

export default TodosTableActions