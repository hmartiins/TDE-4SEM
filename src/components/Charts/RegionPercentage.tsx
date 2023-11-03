import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
  RadialLinearScale,
  ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import { horizontalResponsiveClasses } from "../../constants";
import { makeDataToChart } from "../../utils";

ChartJS.register(
  CategoryScale,
  ArcElement,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
  RadialLinearScale
);

export function RegionPercentage() {
  const selectedChartType = "verticalBar";
  const [chart, setChart] = useState<React.ReactNode>();

  const options: ChartOptions<"line"> &
    ChartOptions<"bar"> &
    ChartOptions<"pie"> &
    ChartOptions<"doughnut"> = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        display: true,
        labels: {
          color: "#fff",
          font: {
            size: 16,
          },
        },
      },
      title: {
        display: false,
      },
    },
  };

  const chartRef = useRef();

  const dataObject = [
    {
      id: 1,
      label: "Sudeste",
      values: [24.7],
    },
    {
      id: 1,
      label: "Sul",
      values: [12.1],
    },
    {
      id: 1,
      label: "Centro-Oeste",
      values: [35.1],
    },
    {
      id: 1,
      label: "Nordeste",
      values: [19.8],
    },
    {
      id: 1,
      label: "Norte",
      values: [8.4],
    },
  ];

  const [data, setData] = useState(
    makeDataToChart(selectedChartType, dataObject, ["Porcentagem"])
  ) as any;

  const renderChart = () => {
    switch (selectedChartType) {
      case "verticalBar":
        return setChart(<Bar ref={chartRef} data={data} options={options} />);
      default:
        return setChart(null);
    }
  };

  useEffect(() => {
    setData(makeDataToChart(selectedChartType, dataObject, ["Porcentagem"]));

    renderChart();
  }, [selectedChartType]);

  return (
    <div
      className={
        "relative py-4 max-w-full flex flex-col overflow-hidden bg-dark"
      }
    >
      <div
        className={clsx([
          "w-full p-5 flex flex-col items-center z-40 relative border rounded-md bg-dark",
          "flex-[2] overflow-hidden",
          "md:self-center",
          "xl:gap-2 xl:self-center",
          horizontalResponsiveClasses,
        ])}
      >
        <h2
          className={clsx([
            "w-full text-2xl text-white font-bold text-left pb-4",
          ])}
        >
          Porcentagens de Investimento em cada região do Brasil
        </h2>

        <div
          className={clsx([
            "w-full px-5 flex z-40 relative min-h-[500px]",
            "flex-[2] overflow-hidden",
            "md:self-center md:px-0",
            "xl:gap-2 xl:self-center",
            horizontalResponsiveClasses,
          ])}
        >
          {chart}
        </div>
      </div>
    </div>
  );
}
