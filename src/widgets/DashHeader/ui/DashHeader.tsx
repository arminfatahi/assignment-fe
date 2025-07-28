"use client";

import { Stack, Typography } from "@mui/material";
import { Profile } from "@/entities/users";

export function DashHeader() {
  return (
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
  );
}
