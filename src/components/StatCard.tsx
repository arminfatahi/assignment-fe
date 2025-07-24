import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { SxProps, Theme } from "@mui/material";
import CustomSkeleton from "./CustomSkeleton";
import { useProjects } from "@/context/ProjectsContext";
import PieCard from "./PieCard";
import ListCard from "./ListCard";
import { StatCardMode } from "@/lib/Types";

type StatCardsProps = {
  mode: StatCardMode;
};

export default function StatCard({ mode }: StatCardsProps) {
  const { loading } = useProjects();

  const sx: SxProps<Theme> = {
    width: {
      sm: "100%",
      md: 280,
      lg: 350,
      xl: 400,
    },
    maxWidth: "100%",
    mx: "auto",
  };

  const title =
    mode === "project"
      ? "My Projects"
      : mode === "task"
        ? "My Tasks"
        : "Overdue Projects";

  return (
    <>
      {loading ? (
        <CustomSkeleton
          variant="rectangular"
          sx={{
            ...sx,
            height: 250,
            borderRadius: 2,
          }}
        />
      ) : (
        <Card
          sx={{
            ...sx,
            overflow: "visible",
          }}
        >
          <CardContent>
            <Box
              width={"100%"}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Typography variant="h6" color="textSecondary" marginBottom={2}>
                {title}
              </Typography>
              {mode === "overdue" ? <ListCard /> : <PieCard mode={mode} />}
            </Box>
          </CardContent>
        </Card>
      )}
    </>
  );
}
