import AddTodoForm from "@/components/AddTodoForm";
import TodoTable from "@/components/TodoTable";
export default function Home() {
  // const todos = await getTodoListAction();

  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <main className="container mx-auto p-10">
      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul> */}
      <AddTodoForm/>
      <TodoTable />
    </main>
    // </div>
  );
}
