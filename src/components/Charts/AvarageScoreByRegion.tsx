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

export function AvarageScoreByRegion() {
  const selectedChartType = "verticalBar";
  const [chart, setChart] = useState<React.ReactNode>();

  const chartRef = useRef();

  const dataObject = [
    {
      id: 1,
      label: "Sudeste",
      values: [537.2],
    },
    {
      id: 1,
      label: "Sul",
      values: [530.7],
    },
    {
      id: 1,
      label: "Centro-Oeste",
      values: [512.2],
    },
    {
      id: 1,
      label: "Nordeste",
      values: [507.7],
    },
    {
      id: 1,
      label: "Norte",
      values: [486.9],
    },
  ];

  const [data, setData] = useState(
    makeDataToChart(selectedChartType, dataObject, [""])
  ) as any;

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

  const renderChart = () => {
    switch (selectedChartType) {
      case "verticalBar":
        return setChart(<Bar ref={chartRef} data={data} options={options} />);
      default:
        return setChart(null);
    }
  };

  useEffect(() => {
    setData(makeDataToChart(selectedChartType, dataObject, [""]));
    renderChart();
  }, [selectedChartType]);

  return (
    <div className={"relative py-4  flex flex-col overflow-hidden bg-dark"}>
      <p className="px-4 my-5 text-left text-lg text-white leading-7 max-w-screen-xl mx-auto">
        O gráfico abaixo apresenta as notas médias do ENEM por região do Brasil
        em ordem decrescente, com o Sudeste liderando. Para a geração desse
        gráfico, foi realizada a soma de todas as notas dos estudantes de cada
        estado e dividido pelas suas respectivas regiões, dessa forma
        descobrimos a média de cada região. Em seguida, as médias foram
        ordenadas em ordem decrescente.
      </p>
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
          Nota média por região
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
