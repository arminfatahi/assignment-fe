import { useModal } from "@/shared/lib/context/ModalContext";
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Chip,
  Stack,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { getStatusColor } from "@/shared/model/utils";
import { Project } from "@/shared/types";

type TaskProps = {
  project: Project;
};

export default function TaskCard({ project }: TaskProps) {
  const { setOpen } = useModal();

  if (!project) {
    return <Typography>Project not found.</Typography>;
  }

  return (
    <Box p={3} position="relative">
      <IconButton
        onClick={() => setOpen(false)}
        sx={{ position: "absolute", top: 8, right: 8 }}
      >
        <CloseIcon />
      </IconButton>

      <Typography
        variant="h4"
        fontWeight="bold"
        width="80%"
        title={project.project_name}
        gutterBottom
      >
        {project.project_name}asfasfas
      </Typography>

      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent="space-between"
      >
        <Typography color="text.secondary">Due: {project.due_date}</Typography>
        <Chip label={project.status} color={getStatusColor(project.status)} />
      </Stack>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom>
        Tasks
      </Typography>

      {project.tasks.length > 0 ? (
        <Box sx={{ maxHeight: 300, overflowY: "auto" }} p={1} borderTop={3}>
          <List>
            {project.tasks.map((task) => (
              <ListItem
                key={task.task_id}
                sx={{
                  color: "text.secondary",
                  border: "2px solid",
                  borderRadius: 2,
                  mb: 2,
                  px: 2,
                  bgcolor: "background.paper",
                }}
                secondaryAction={
                  <Chip
                    label={task.task_status}
                    color={getStatusColor(task.task_status)}
                    size="small"
                  />
                }
              >
                <ListItemText
                  primary={
                    <Typography
                      title={task.task_name}
                      width={"50%"}
                      color="text.primary"
                    >
                      {task.task_name}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
      ) : (
        <Typography color="warning" fontWeight="bold">
          No tasks found for this project !!!
        </Typography>
      )}
    </Box>
  );
}
