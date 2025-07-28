import { Task } from "@/shared/model";

type Out = {
  totalTasks: number;
  completedTasks: number;
};

export function fillBarChart(tasks: Task[]): Out {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.task_status === "Done").length;
  return { totalTasks, completedTasks };
}
