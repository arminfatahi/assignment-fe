import { Project } from "./Types";

export async function getProjects(): Promise<Project[] | null> {
  try {
    const res = await fetch("/api/projects");
    if (res.ok) {
      const projects: Project[] = await res.json();
      return projects;
    }
    return null;
  } catch {
    return null;
  }
}
