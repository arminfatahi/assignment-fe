import { Box, CircularProgress } from "@mui/material";

export function Loading({ size }: { size: number }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <CircularProgress size={size} />
    </Box>
  );
}
