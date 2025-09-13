interface TaskProps {
  id: string;
  title: string;
  description: string;
  dueDate: string | null;
  isDone: boolean;
  doneAt: string | null;
  assign: string[];
}
export type { TaskProps }

interface TaskItemProps {
  tasks: TaskProps[];
  setTasks: (tasks: TaskProps[]) => void;
  addTask: (
    title: string,
    description: string,
    dueDate: string | null,
    assign: string[]
  ) => void;
  toggleTask: (id: string) => void;
  removeTask: (id: string) => void;
}
export type { TaskItemProps }

interface TaskFormState {
  title: string,
  description: string,
  dueDate: string | null,
  assign: string[],
  setTitle: (title: string) => void;
  setDueDate: (dueDate: string | null) => void;
  setDescription: (description: string) => void;
  resetForm: () => void;
  setAssign: (assign: string[]) => void;
}
export type { TaskFormState }