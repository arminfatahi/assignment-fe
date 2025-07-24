import {
  createContext,
  useContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";
import { Project } from "@/lib/Types";
import { getProjects } from "@/lib/HandleProjects";

type ProjectsContextType = {
  projects: Project[] | null;
  loading: boolean;
};

const ProjectsContext = createContext<ProjectsContextType>(
  {} as ProjectsContextType,
);

export const ProjectsProvider = ({ children }: PropsWithChildren) => {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      if (projects == null) {
        const projectData = await getProjects();
        if (projectData) {
          setProjects(projectData);
        }
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  return (
    <ProjectsContext.Provider value={{ projects, loading }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectsContext);
