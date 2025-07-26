import { useProjects } from "@/context/ProjectsContext";
import { Project } from "@/lib/Types";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

type TaskProps = {
  projectID: number;
};

export default function Task({ projectID }: TaskProps) {
  const { projects } = useProjects();
  const project: Project | undefined = projects?.find(
    (p) => p.id === projectID,
  );

  return (
    <Box>
      <Typography id="transition-modal-title" variant="h6" component="h2">
        {project?.id}
      </Typography>
      <Typography id="transition-modal-description" sx={{ mt: 2 }}>
        {project?.status}
      </Typography>
    </Box>
  );
}
