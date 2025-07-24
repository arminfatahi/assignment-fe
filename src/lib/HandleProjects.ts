import { Project } from "./Types";

type ProjectsData = {
  projects: Project[];
};

export async function getProjects(): Promise<Project[] | null> {
  try {
    const res = await fetch("/api/projects");
    if (res.ok) {
      const projects: ProjectsData = await res.json();
      return projects.projects;
    }
    return null;
  } catch {
    return null;
  }
}
