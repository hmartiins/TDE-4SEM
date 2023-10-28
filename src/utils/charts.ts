// import { generateRandomRGBAColor } from '.';
import { ChartType } from '../constants/charts';

export function makeDataToChart(
  chartType: ChartType,
  datasets: { id: number, label: string, values: number[] }[],
  labels: string[],
) {
  // if (chartType === 'verticalBar' || chartType === 'horizontalBar') {
  if (chartType === 'verticalBar') {
    return {
      labels,
      datasets: datasets.map((data) => (
        {
          label: data.label,
          data: data.values,
          backgroundColor: "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0"),
        }
      )),
    };
  };

  // if(chartType === 'area') {
  //   const result = {
  //     labels,
  //     datasets: datasets.map((data) => (
  //       {
  //         label: data.label,
  //         data: data.values,
  //         fill: true,
  //         backgroundColor: generateRandomRGBAColor("0.3"),
  //       }
  //     )),
  //   };

  //   result.datasets.forEach((data) => data.backgroundColor = generateRandomRGBAColor("0.3"));

  //   return result;
  // }

  // if(chartType === 'pie' || chartType === 'doughnut') {
  if(chartType === 'doughnut') {
    const result = {
      labels,
      datasets: datasets.map((data) => (
        {
          data: data.values,
          backgroundColor: data.values.map(() => "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")),
          borderColor: "transparent",
        }
      )),
    };

    return result;
  }

  if(chartType === 'radar') {
    return {
      labels,
      datasets: datasets.map((data) => (
        {
          data: data.values,
          fill: true,
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(179,181,198,1)",
        }
      )),
    };
  }
}

