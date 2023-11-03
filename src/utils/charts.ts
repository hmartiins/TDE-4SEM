import { ChartType } from "../constants/charts";

export function makeDataToChart(
  chartType: ChartType,
  datasets: { id: number; label: string; values: number[] }[],
  labels: string[]
) {
  if (chartType === "verticalBar") {
    return {
      labels,
      datasets: datasets.map((data) => ({
        label: data.label,
        data: data.values,
        backgroundColor:
          "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0"),
      })),
    };
  }

  if (chartType === "doughnut") {
    const result = {
      labels,
      datasets: datasets.map((data) => ({
        data: data.values,
        backgroundColor: ["#e60bbe", "#3620f7"],
        borderColor: "transparent",
      })),
    };

    return result;
  }
}
