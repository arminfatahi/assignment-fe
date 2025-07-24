import { Bar, BarConfig } from "@ant-design/charts";

type BarChartProps = {
  total: number;
  completed: number;
};

export default function BarChart({ total, completed }: BarChartProps) {
  const config: BarConfig = {
    data: [
      {
        labelName: "tasks",
        value: completed,
      },
    ],
    tooltip: false,
    xField: "labelName",
    yField: "value",
    markBackground: {
      style: {
        fill: "#eee",
      },
    },
    scale: {
      y: {
        domain: [0, total],
      },
    },
    axis: {
      x: {
        tick: false,
        title: false,
      },
      y: {
        grid: false,
        tick: false,
        label: false,
        title: false,
      },
    },
    interaction: {
      elementHighlight: true,
    },
  };

  return (
    <div style={{ width: "80%", maxWidth: 300 }}>
      <Bar {...config} autoFit height={50} padding={0} margin={15} />
    </div>
  );
}
