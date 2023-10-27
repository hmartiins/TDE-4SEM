import { useEffect, useState } from "react";
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
} from 'chart.js';
import { Bar, Doughnut, Line, Pie, Radar } from 'react-chartjs-2';

import { horizontalResponsiveClasses, chartsTypes, ChartType } from "../../constants";
import { Select } from "..";
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
  RadialLinearScale,
);

export function AvarageScoreByRegion() {
  const [selectedChartType, setSelectedChartType] = useState<ChartType>("area");
  const [chart, setChart] = useState<React.ReactNode>();

  const dataObject = [
    {
      label: "Sudeste",
      value: 537.2,
    },
    {
      label: "Sul",
      value: 530.7,
    },
    {
      label: "Centro-Oeste",
      value: 512.2,
    },
    {
      label: "Nordeste",
      value: 507.7,
    },
    {
      label: "Norte",
      value: 486.9,
    },
  ];

  const [data, setData] = useState(makeDataToChart(selectedChartType, dataObject)) as any;

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  const renderChart = () => {
    switch (selectedChartType) {
      case "verticalBar":
        return setChart(<Bar data={data} options={options} />);
      case "horizontalBar":
        return setChart(<Bar data={data} options={options} />);
      case "line":
        return setChart(<Line data={data} options={options} />);
      case "pie":
        return setChart(<Pie data={data} options={options} />);
      case "area":
        return setChart(<Line data={data} options={options} />);
      case "doughnut":
        return setChart(<Doughnut data={data} options={options} />);
      case "radar":
        return setChart(<Radar data={data} options={options} />);
      default:
        return setChart(null);
    }
  };

  useEffect(() => {
    setData(makeDataToChart(selectedChartType, dataObject));
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
            Nota média por região
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
                label="Visualização do gráfico"
                onChange={(e) => setSelectedChartType(e.target.value as ChartType)}
              >
                {chartsTypes.map((item) => (
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

            <div
              className={
                clsx([
                  "flex-1"
                ])
              }
            >
              <Select
                id="chart-interaction-mode"
                label="Modo de iteração"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </Select>
            </div>
          </div>
        </header>

        <div
          className={
            clsx([
              "w-full px-5 flex flex-col items-center z-40 relative",
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

