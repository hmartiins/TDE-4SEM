import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { horizontalResponsiveClasses, chartsTypesOnlyDoughnut, ChartType } from "../../constants";
import { Select } from "..";
import { makeDataToChart } from "../../utils";

ChartJS.register(
  ArcElement, Tooltip, Legend
);

export function GenderDistribution() {
  const [selectedChartType, setSelectedChartType] = useState<ChartType>("doughnut");
  const [chart, setChart] = useState<React.ReactNode>();

  const chartRef = useRef();

  const dataObject = [
    {
      id: 1,
      label: "Gênero",
      values: [61.7, 38.3],
    },
  ];

  const [data, setData] = useState(makeDataToChart(selectedChartType, dataObject, ["Feminino", "Masculino"])) as any;

  const options: ChartOptions<"line"> &
    ChartOptions<"bar"> &
    ChartOptions<"pie"> &
    ChartOptions<"doughnut"> = {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top' as const,
          display: true,
        },
        title: {
          display: false,
        }, 
      },
    };

  const renderChart = () => {
    switch (selectedChartType) {
      case "doughnut":
        console.log(data);
        return setChart(<Doughnut ref={chartRef} data={data} options={options} />);
      default:
        return setChart(null);
    }
  };

  useEffect(() => {
    setData(makeDataToChart(selectedChartType, dataObject, ["Feminino", "Masculino"]));
    renderChart();
  }, [selectedChartType]);

  return (
    <div className={
      "relative py-4 max-w-full flex flex-col overflow-hidden bg-slate-50"
    }>
      <div
        className={
          clsx([
            "w-full p-5 flex flex-col items-center z-40 relative border rounded-md bg-slate-100",
            "flex-[2] overflow-hidden",
            "md:self-center",
            "xl:gap-2 xl:self-center",
            horizontalResponsiveClasses,
          ])
        }
      >
        <header
          className={
            clsx([
              "w-full p-5 flex flex-col items-center z-40 relative border rounded-md bg-slate-50",
              "flex-[2] overflow-hidden",
              "md:self-center",
              "xl:gap-2 xl:self-center",
              horizontalResponsiveClasses,
            ])
          }
        >
          <h2
            className={
              clsx([
                "w-full text-2xl text-slate-700 font-bold text-left pb-4",
              ])
            }
          >
            Distribuição de Gênero
          </h2>

          <div
            className={
              clsx([
                "w-full flex flex-col gap-4",
                "md:flex-row gap-5",
                "lg:gap-10",
              ])
            }
          >
            <div
              className={
                clsx([
                  "flex-1"
                ])
              }
            >
              <Select
                id="chart-type"
                // label="Visualização do gráfico"
                label=""
                onChange={(e) => setSelectedChartType(e.target.value as ChartType)}
              >
                {chartsTypesOnlyDoughnut.map((item) => (
                  <option
                    key={item.value}
                    value={item.value}
                    selected={item.value === selectedChartType}
                  >
                    {item.label}
                  </option>
                ))}
              </Select>
            </div>
          </div>
        </header>

        <div
          className={
            clsx([
              "w-full px-5 flex z-40 relative min-h-[500px]",
              "flex-[2] overflow-hidden",
              "md:self-center md:px-0",
              "xl:gap-2 xl:self-center",
              horizontalResponsiveClasses,
            ])
          }
        >
            {chart}
        </div>
      </div>
    </div>
  );
}

