import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Project } from "@/lib/Types";
import { Pie, PieConfig } from "@ant-design/plots";
import { useTheme } from "@mui/material";

type StatCardsProps = {
  projects: Project[];
  mode: "project" | "task" | "overdue";
};

export default function StatCard({ projects, mode }: StatCardsProps) {
  const title =
    mode === "project"
      ? "My Projects"
      : mode === "task"
        ? "My Tasks"
        : "Overdue Projects";
  const theme = useTheme();
  const config: PieConfig = {
    data: [
      { type: "Completed", value: 27 },
      { type: "On Track", value: 25 },
      { type: "At Risk", value: 18 },
    ],
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
          text: "25",
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
    <Card
      sx={{
        width: {
          sm: "100%",
          md: 280,
          lg: 350,
          xl: 400,
        },
        maxWidth: "100%",
        mx: "auto",
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
  );
}
