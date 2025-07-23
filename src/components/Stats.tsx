"use client";

import StatCard from "@/components/StatCard";
import { Project } from "@/lib/Types";
import { Box, Stack, Tab, Tabs, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

type StatsProps = {
  projects: Project[];
};

function Stats({ projects }: StatsProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <>
      {isMobile ? (
        <Box marginTop={4} width="70%" marginX="auto">
          <Tabs
            value={tabIndex}
            onChange={handleTabChange}
            centered
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
          >
            <Tab label="Projects" />
            <Tab label="Tasks" />
            <Tab label="Overdue" />
          </Tabs>
          <Box marginTop={2}>
            {tabIndex === 0 && <StatCard mode="project" projects={projects} />}
            {tabIndex === 1 && <StatCard mode="task" projects={projects} />}
            {tabIndex === 2 && <StatCard mode="overdue" projects={projects} />}
          </Box>
        </Box>
      ) : (
        <Stack
          direction="row"
          spacing={{ lg: 10, md: 5, sm: 2 }}
          marginX="auto"
          marginTop={4}
        >
          <StatCard mode="project" projects={projects} />
          <StatCard mode="task" projects={projects} />
          <StatCard mode="overdue" projects={projects} />
        </Stack>
      )}
    </>
  );
}

export default Stats;
