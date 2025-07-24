"use client";

import Profile from "@/components/Profile";
import Stats from "@/components/Stats";
import { useProjects } from "@/context/ProjectsContext";
import withProtectedRoute from "@/lib/AuthWrapper";

import { Stack, Typography } from "@mui/material";

function Dashboard() {
  useProjects();

  return (
    <Stack direction={"column"}>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        marginTop={2}
      >
        <Typography color="primary.contrastText" variant="h2" paddingLeft={2}>
          <b>Dashboard</b>
        </Typography>
        <Profile />
      </Stack>

      <Stats />
    </Stack>
  );
}

export default withProtectedRoute(Dashboard);
