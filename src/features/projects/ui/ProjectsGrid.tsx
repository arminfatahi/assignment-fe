import { ProjectCard } from "@/entities/project/ui";
import { Project } from "@/shared/model";
import { Grid } from "@mui/material";

type ProjectsGridProps = {
  projects: Project[] | undefined;
};

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <Grid
      paddingX={1}
      container
      rowGap={4}
      marginX="auto"
      spacing={1}
      marginTop={5}
      marginBottom={10}
      height="100%"
    >
      {projects?.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          project_name={project.project_name}
          due_date={project.due_date}
          status={project.status}
          tasks={project.tasks}
        />
      ))}
    </Grid>
  );
}
