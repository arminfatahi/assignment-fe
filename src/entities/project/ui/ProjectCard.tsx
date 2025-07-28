import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import {
  CardActionArea,
  Chip,
  Divider,
  Stack,
  SxProps,
  Theme,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { useModal } from "@/shared/context";
import { Project } from "@/shared/model";
import { getStatusColor } from "@/shared/lib";
import { fillBarChart } from "../lib";
import BarChart from "./BarChart";

export function ProjectCard({
  id,
  project_name,
  due_date,
  status,
  tasks,
}: Project) {
  const { setOpen, setProject } = useModal();

  const sx: SxProps<Theme> = {
    width: {
      xs: 200,
      sm: 250,
      md: 300,
      lg: 350,
      xl: 400,
    },
    maxHeight: 180,
    height: {
      xs: "auto",
      md: "full",
    },
    mx: "auto",
    overflow: "visible",
    borderRadius: 3,
  };

  const { totalTasks, completedTasks } = fillBarChart(tasks);

  return (
    <Card sx={sx} variant="outlined">
      <CardActionArea
        onClick={() => {
          setProject({ id, project_name, due_date, status, tasks } as Project);
          setOpen(true);
        }}
      >
        <CardContent sx={{ height: "100%" }}>
          <Stack spacing={1}>
            <Stack direction={"row"}>
              <Typography
                mr="auto"
                color="text.primary"
                fontWeight={600}
                textAlign="center"
                title={project_name}
              >
                {project_name}
              </Typography>
              <Chip
                label={status}
                color={getStatusColor(status)}
                size="small"
              />
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              justifyContent="center"
              alignItems="center"
              color="text.secondary"
            >
              <CalendarTodayIcon fontSize="small" />
              <Typography variant="body2">{due_date}</Typography>
            </Stack>

            <Divider />

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              minHeight={80}
            >
              {totalTasks > 0 ? (
                <BarChart total={totalTasks} completed={completedTasks} />
              ) : (
                <Stack
                  height="100%"
                  flex={1}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography
                    variant="body2"
                    color="warning.main"
                    fontWeight="bold"
                  >
                    no tasks !!!
                  </Typography>
                </Stack>
              )}
              <Stack direction="row" spacing={1} alignItems="center">
                <TaskAltIcon fontSize="small" />
                <Typography variant="body2">
                  {completedTasks}/{totalTasks}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
