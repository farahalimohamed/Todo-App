import { ITodo } from "./index";

export type TodoFormProps =
  | { mode: "create"; userId: string | null; todo?: never }
  | { mode: "edit"; todo: ITodo; userId?: never };
