import { apiFetch } from "@/service/api";
import { Project } from "@/shared/types";

type ProjectsData = {
  projects: Project[];
};

export async function getProjects(): Promise<Project[] | null> {
  try {
    const { projects } = await apiFetch<ProjectsData>("/api/projects");
    return projects;
  } catch {
    return null;
  }
}
