"use client";

import Profile from "@/components/Profile";
import Stats from "@/components/Stats";
import withProtectedRoute from "@/lib/AuthWrapper";
import { getProjects } from "@/lib/HandleProjects";
import { Project } from "@/lib/Types";
import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function Dashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectData = await getProjects();
      if (projectData) {
        setProjects(projectData);
      } else {
      }
      setLoading(false);
    };
    fetchProjects();
  }, []);

  return (
    <Stack direction={"column"}>
      {/*Header*/}
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

      <Stats projects={projects} />
    </Stack>
  );
}

export default withProtectedRoute(Dashboard);
