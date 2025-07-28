"use client";

import { Stack } from "@mui/material";
import TaskModal from "@/pages/dashboard/ui/TaskModal";
import Projects from "./projects/Projects";
import { DashHeader } from "@/widgets/DashHeader";
import { DashStats } from "@/widgets/DashStats";

export function Dashboard() {
  return (
    <>
      <TaskModal />
      <Stack direction={"column"}>
        <DashHeader />
        <DashStats />
        <Projects />
      </Stack>
    </>
  );
}
