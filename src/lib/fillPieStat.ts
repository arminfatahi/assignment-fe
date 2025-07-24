import { Project } from "./Types";

type fillPieStatProps = {
  projects: Project[] | null;
  mode: "task" | "project";
};

type Data = {
  type: string;
  value: number;
};

type fillPieStatOut = {
  data: Data[];
  total: number;
};

export default function fillPieStat({
  projects,
  mode,
}: fillPieStatProps): fillPieStatOut {
  const statusMap = new Map<string, number>();
  let total = 0;

  if (Array.isArray(projects)) {
    if (mode === "project") {
      for (const project of projects) {
        statusMap.set(project.status, (statusMap.get(project.status) || 0) + 1);
        total++;
      }
    } else if (mode === "task") {
      for (const project of projects) {
        for (const task of project.tasks) {
          statusMap.set(
            task.task_status,
            (statusMap.get(task.task_status) || 0) + 1,
          );
          total++;
        }
      }
    }
  }

  const data: Data[] = Array.from(statusMap.entries()).map(([type, value]) => ({
    type,
    value,
  }));

  return { data, total };
}
