import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { ListItemButton, SxProps, Theme } from "@mui/material";
import { useProjects } from "@/context/ProjectsContext";
import { useModal } from "@/context/ModalContext";

export default function ListCard() {
  const { setOpen, setProjectID } = useModal();
  const { projects } = useProjects();

  const overDueProjects = projects?.filter((project) => {
    const [day, month, year] = project.due_date.split("-").map(Number);
    const dueDate = new Date(year, month - 1, day);
    return dueDate <= new Date();
  });

  const sxCol: SxProps<Theme> = {
    display: { xs: "none", sm: "block", md: "none", lg: "block" },
  };

  return (
    <Box width="100%" maxWidth={360} borderColor="divider">
      <Box
        display="flex"
        borderRadius={5}
        flexDirection="row"
        py={1}
        pl={2}
        bgcolor="primary.main"
        position="sticky"
        top={0}
        zIndex={1}
        color="primary.contrastText"
      >
        <Typography variant="body2" flex={1} fontWeight="bold">
          Name
        </Typography>
        <Typography variant="body2" flex={1} fontWeight="bold" pl={1}>
          Status
        </Typography>
        <Typography variant="body2" flex={1} fontWeight="bold" sx={sxCol}>
          Due Date
        </Typography>
      </Box>

      <Box
        sx={{
          maxHeight: 180,
          overflowY: "auto",
          bgcolor: "parent",
        }}
      >
        <List disablePadding>
          {overDueProjects?.map((project) => (
            <ListItem key={project.id} disablePadding>
              <ListItemButton
                component="a"
                onClick={() => {
                  setProjectID(project.id);
                  setOpen(true);
                }}
              >
                <Box display="flex" py={1} width="100%">
                  <Typography
                    title={project.project_name}
                    variant="body2"
                    flex={1}
                    fontWeight="bold"
                  >
                    {project.project_name}
                  </Typography>
                  <Typography
                    pl={1}
                    variant="body2"
                    flex={{ xs: 0.8, sm: 1, md: 0.8, lg: 1 }}
                  >
                    {project.status}
                  </Typography>
                  <Typography variant="body2" flex={0.8} sx={sxCol}>
                    {project.due_date}
                  </Typography>
                </Box>
              </ListItemButton>
            </ListItem>
          ))}
          {projects?.length == 0 && (
            <Typography variant="body2" marginTop={2} marginLeft={2}>
              No Overdue Projects...
            </Typography>
          )}
        </List>
      </Box>
    </Box>
  );
}
