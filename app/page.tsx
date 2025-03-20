import { getUserTodoListAction } from "@/actions/todo.actions";
import TodoForm from "@/components/TodoForm";
import TodoTable from "@/components/TodoTable";
import { auth } from "@clerk/nextjs/server";
export default async function Home() {
  const { userId } = await auth();
  const todos = await getUserTodoListAction({ userId });

  return (
    <div className="min-h-screen flex flex-col items-center p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="w-full max-w-[800px] flex flex-col gap-4">
        <TodoForm mode="create" userId={userId} />
        <TodoTable todos={todos} />
      </main>
    </div>
  );
}
