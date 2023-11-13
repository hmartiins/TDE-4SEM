import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

import { horizontalResponsiveClasses } from "../../constants";
import { makeDataToChart } from "../../utils";

ChartJS.register(ArcElement, Tooltip, Legend);

export function GenderDistribution() {
  const selectedChartType = "doughnut";
  const [chart, setChart] = useState<React.ReactNode>();

  const chartRef = useRef();

  const dataObject = [
    {
      id: 1,
      label: "Gênero",
      values: [61.7, 38.3],
    },
  ];

  const [data, setData] = useState(
    makeDataToChart(selectedChartType, dataObject, ["Feminino", "Masculino"])
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
      case "doughnut":
        return setChart(
          <Doughnut ref={chartRef} data={data} options={options} />
        );
      default:
        return setChart(null);
    }
  };

  useEffect(() => {
    setData(
      makeDataToChart(selectedChartType, dataObject, ["Feminino", "Masculino"])
    );
    renderChart();
  }, [selectedChartType]);

  return (
    <div
      className={
        "relative py-4 max-w-full flex flex-col overflow-hidden bg-dark"
      }
    >
      <p className="px-4 my-5 text-left text-lg text-white leading-7 max-w-screen-xl mx-auto">
        O gráfico compara o investimento em educação normalizado (barras verdes)
        com as notas médias do ENEM também normalizadas (barras azuis) por
        região brasileira. Observa-se que a região Centro-Oeste tem o maior
        investimento, enquanto a região Sudeste apresenta a melhor performance
        em notas, ambos atingindo o valor máximo normalizado de 1 na sua
        categoria.
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
          Distribuição de Gênero
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
