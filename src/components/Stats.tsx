"use client";

import PieCard from "@/components/PieCard";
import { Box, Stack, Tab, Tabs, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

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
            {tabIndex === 0 && <PieCard mode="project" />}
            {tabIndex === 1 && <PieCard mode="task" />}
            {tabIndex === 2 && <PieCard mode="overdue" />}
          </Box>
        </Box>
      ) : (
        <Stack
          direction="row"
          spacing={{ lg: 10, md: 5, sm: 2 }}
          marginX="auto"
          marginTop={4}
        >
          <PieCard mode="project" />
          <PieCard mode="task" />
          <PieCard mode="overdue" />
        </Stack>
      )}
    </>
  );
}

export default Stats;
