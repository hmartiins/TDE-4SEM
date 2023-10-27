import { ChartType } from '../constants/charts';

export function makeDataToChart(
  chartType: ChartType,
  data: { label?: string, value: number }[]
) {
  if (chartType === 'verticalBar' || chartType === 'horizontalBar') {
    return {
      labels: data.map((item) => item.label),
      datasets: [
        {
          data: data.map((item) => item.value),
          backgroundColor: data.map(() => "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")),
        },
      ],
    };
  }

  if(chartType === 'area' || chartType === 'line') {
    return {
      labels: data.map((item) => item.label),
      datasets: [
        {
          data: data.map((item) => item.value),
          fill: true,
          borderColor: "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0"),
          backgroundColor: "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0"),
        },
      ],
    };
  }

  if(chartType === 'pie' || chartType === 'doughnut') {
    const result = {
      labels: data.map((item) => item.label),
      datasets: [
        {
          data: data.map((item) => item.value),
          backgroundColor: data.map(() => "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")),
          borderColor: "transparent",
        },
      ],
    };

    return result;
  }

  if(chartType === 'radar') {
    return {
      labels: data.map((item) => item.label),
      datasets: [
        {
          data: data.map((item) => item.value),
          fill: true,
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(179,181,198,1)",
        },
      ],
    };
  }
}

