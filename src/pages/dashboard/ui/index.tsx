"use client";

import Stats from "@/pages/dashboard/ui/stats";
import { Stack, Typography } from "@mui/material";
import Projects from "@/pages/dashboard/ui/projects";
import TaskModal from "@/pages/dashboard/ui/TaskModal";
import { Profile } from "@/entities/users";

export function Dashboard() {
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
