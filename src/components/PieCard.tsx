import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Pie, PieConfig } from "@ant-design/plots";
import { SxProps, Theme, useTheme } from "@mui/material";
import CustomSkeleton from "./CustomSkeleton";
import { useProjects } from "@/context/ProjectsContext";
import fillPieStat from "@/lib/fillPieStat";

type StatCardsProps = {
  mode: "project" | "task";
};

export default function PieCard({ mode }: StatCardsProps) {
  const theme = useTheme();
  const { projects, loading } = useProjects();
  const { data, total } = fillPieStat({ projects, mode });

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

  const config: PieConfig = {
    data: data,
    angleField: "value",
    colorField: "type",
    innerRadius: 0.6,
    label: {
      text: "value",
      style: {
        fontWeight: "bold",
      },
    },
    legend: {
      color: {
        title: false,
        position: "bottom",
        itemLabelFill: `${theme.palette.text.secondary}`,
      },
    },
    annotations: [
      {
        type: "text",
        style: {
          text: total.toString(),
          x: "50%",
          y: "50%",
          textAlign: "center",
          fontSize: 20,
          fontStyle: "bold",
        },
      },
    ],
  };

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
          }}
        >
          <CardContent>
            <Box
              width={"100%"}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Typography variant="h6" color="textSecondary">
                {title}
              </Typography>
              <Pie {...config} height={200} width={250} />
            </Box>
          </CardContent>
        </Card>
      )}
    </>
  );
}
