export type User = {
  userID: string | null;
  name: string | null;
  email: string | null;
  role: string | null;
  avatarURL: string | null;
};

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
