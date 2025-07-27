import {
  createContext,
  useContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";

import { Project } from "@/shared/model";
import { getProjects } from "../../api";
import { useAuth } from "@/entities/users";

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
  const { user } = useAuth();

  useEffect(() => {
    const fetchUser = async () => {
      if (user != null) {
        const projectData = await getProjects();
        if (projectData) {
          setProjects(projectData);
          setLoading(false);
        }
      }
    };
    fetchUser();
  }, [user]);

  return (
    <ProjectsContext.Provider value={{ projects, loading }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectsContext);
