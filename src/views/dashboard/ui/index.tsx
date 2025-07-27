"use client";

import Stats from "@/features/stats/ui";
import { Stack, Typography } from "@mui/material";
import Profile from "@/features/user/ui/Profile";
import Projects from "@/features/projects/ui";
import TaskModal from "@/features/modals/ui/TaskModal";

function Dashboard() {
  return (
    <>
      <TaskModal />
      <Stack direction={"column"}>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          marginTop={2}
        >
          <Typography
            color="primary.contrastText"
            variant="h2"
            paddingLeft={2}
            fontWeight="bold"
          >
            Dashboard
          </Typography>
          <Profile />
        </Stack>

        <Stats />
        <Projects />
      </Stack>
    </>
  );
}

export default Dashboard;
