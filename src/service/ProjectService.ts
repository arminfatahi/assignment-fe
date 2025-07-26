import { Project } from "@/lib/Types";
import { apiFetch } from "./api";

type ProjectsData = {
  projects: Project[];
};

export const ProjectService = {
  async getProjects(): Promise<Project[] | null> {
    try {
      const { projects } = await apiFetch<ProjectsData>("/api/projects");
      return projects;
    } catch {
      return null;
    }
  },
};
