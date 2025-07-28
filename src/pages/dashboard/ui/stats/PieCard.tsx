import { Pie, PieConfig } from "@ant-design/plots";
import { useTheme } from "@mui/material";
import { fillPieStat, useProjects } from "../../lib";

type StatCardsProps = {
  mode: "project" | "task";
};

export default function PieCard({ mode }: StatCardsProps) {
  const theme = useTheme();
  const { projects } = useProjects();
  const { data, total } = fillPieStat({ projects, mode });

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
    tooltip: {
      items: ["type"],
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
          fill: `${theme.palette.text.secondary}`,
        },
      },
    ],
  };

  return <Pie {...config} height={200} width={250} />;
}
