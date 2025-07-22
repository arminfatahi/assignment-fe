import { Box, CircularProgress } from "@mui/material";

export function Loading({
  size,
  color = "primary",
}: {
  size: number;
  color?: string;
}) {
  return (
    <Box
      color={color}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <CircularProgress size={size} color="inherit" />
    </Box>
  );
}
