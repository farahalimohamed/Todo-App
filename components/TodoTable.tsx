import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ITodo } from "@/interfaces";
import { Badge } from "./ui/badge";
import TodosTableActions from "./TodosTableActions";

const TodoTable = ({ todos }: { todos: ITodo[] }) => {
  return (
    <div className="max-h-[500px] overflow-y-auto mt-4">
      <Table>
        <TableCaption>A list of your todos.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Completed</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todos.map((todo) => (
            <TableRow key={todo?.id}>
              <TableCell className="font-medium">{todo?.id}</TableCell>
              <TableCell>{todo?.title}</TableCell>
              <TableCell>
                {todo?.completed ? (
                  <Badge>Completed</Badge>
                ) : (
                  <Badge variant={"secondary"}>Uncompleted</Badge>
                )}
              </TableCell>
              <TableCell className="flex items-center justify-end space-x-2">
                <TodosTableActions todo={todo} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">
              {!todos.length ? "You don't have any todo yet!" : todos.length}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default TodoTable;
