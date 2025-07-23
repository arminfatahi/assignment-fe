"use client";

import Profile from "@/components/Profile";
import withProtectedRoute from "@/lib/AuthWrapper";
import { Box } from "@mui/material";

function Dashboard() {
  return (
    <Box display="flex" width="100%">
      <Profile />
    </Box>
  );
}

export default withProtectedRoute(Dashboard);
