import { create } from "zustand";
import { type TaskFormState } from "../libs/Task";

export const useTaskFormStore = create<TaskFormState>((set) => ({
  assign: [],
  title: "",
  description: "",
  dueDate: "",
  setTitle: (title) =>
    set(() => ({
      title: title,
    })),
  setDescription: (description) =>
    set(() => ({
      description: description,
    })),
  setDueDate: (dueDate) =>
    set(() => ({
      dueDate: dueDate,
    })),
  resetForm: () =>
    set({
      title: "",
      description: "",
      dueDate: "",
      assign: [],
    }),
  setAssign: (assign) =>
    set(() => ({
      assign: assign, })),
}));