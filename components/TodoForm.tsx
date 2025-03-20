"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { todoFormSchema, TodoFormValues } from "@/schema";
import { createTodoAction, updateTodoAction } from "@/actions/todo.actions";
import { TodoFormProps } from "@/interfaces";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Pen } from "lucide-react";
import Spinner from "./Spinner";
import toast from "react-hot-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const TodoForm = ({ mode, userId, todo }: TodoFormProps) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const defaultValues: Partial<TodoFormValues> =
    mode === "edit"
      ? {
          title: todo.title,
          body: todo.body as string,
          completed: todo.completed,
        }
      : {
          title: "",
          body: "",
          completed: false,
        };

  const form = useForm<TodoFormValues>({
    resolver: zodResolver(todoFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const onSubmit = async ({ title, body, completed }: TodoFormValues) => {
    setLoading(true);
    try {
      if (mode === "create") {
        await createTodoAction({
          title,
          body,
          completed,
          userId: userId!,
        });
        toast.success("Todo created successfully!");
      } else {
        await updateTodoAction({
          id: todo.id,
          title,
          body: body as string,
          completed,
        });
        toast.success("Todo updated successfully!");
      }
      form.reset(defaultValues);
      setOpen(false);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="flex justify-end">
        <DialogTrigger asChild>
          <Button className={mode === "create" ? "w-auto" : ""}>
            {mode === "create" ? (
              <>
                <Plus size={14} className="mr-1" />
                New Todo
              </>
            ) : (
              <Pen size={16} />
            )}
          </Button>
        </DialogTrigger>
      </div>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {mode === "create" ? "Add A New Todo" : "Edit This Todo"}
          </DialogTitle>
          {mode === "create" && (
            <DialogDescription>
              Fill in the details to create a new todo.
            </DialogDescription>
          )}
        </DialogHeader>
        <div className="py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Go to gym" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="body"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Short Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Do 10 pushups and 10 squats"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      You can write a short description about your todo.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="completed"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={(value) => field.onChange(value)}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">Completed</FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="submit" disabled={loading}>
                  {loading ? (
                    <>
                      <Spinner /> Saving
                    </>
                  ) : (
                    "Save"
                  )}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TodoForm;
