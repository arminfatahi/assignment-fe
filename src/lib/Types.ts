export type User = {
  userID: string;
  name: string;
  email: string;
  role: string;
  avatarURL: string | null;
};

export type StatCardMode = "project" | "task" | "overdue";

export type Task = {
  task_id: number;
  task_name: string;
  task_status: "Done" | "In Progress" | "To Do";
};

export type Project = {
  id: number;
  project_name: string;
  due_date: string;
  status: "On Track" | "At Risk" | "Completed";
  tasks: Task[];
};
