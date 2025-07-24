"use client";

import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import withProtectedRoute from "@/lib/AuthWrapper";
import { Stack, Typography } from "@mui/material";

function Dashboard() {
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
  );
}

export default withProtectedRoute(Dashboard);
