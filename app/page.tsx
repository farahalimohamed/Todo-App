import { getTodoListAction } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import TodoTable from "@/components/TodoTable";
import { auth } from "@clerk/nextjs/server";
export default async function Home() {
  const {userId}= await auth();
  const todos = await getTodoListAction();

  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <main className="mx-auto p-20">
      <AddTodoForm userId={userId}/>
      <TodoTable todos={todos} />
    </main>
    // </div>
  );
}
