"use client";

import { Box, Grid, Tab, Tabs, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import StatCard from "./StatCard";

function Stats() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <>
      {isMobile ? (
        <Box marginTop={6} width="70%" marginX="auto">
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
            {tabIndex === 0 && <StatCard mode="project" />}
            {tabIndex === 1 && <StatCard mode="task" />}
            {tabIndex === 2 && <StatCard mode="overdue" />}
          </Box>
        </Box>
      ) : (
        <Grid
          container
          spacing={{ lg: 9, md: 3, sm: 2 }}
          marginX="auto"
          marginTop={6}
        >
          <StatCard mode="project" />
          <StatCard mode="task" />
          <StatCard mode="overdue" />
        </Grid>
      )}
    </>
  );
}

export default Stats;
