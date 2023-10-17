import { Chart, ChartWrapperOptions } from "react-google-charts";

const data = [
  ["", "Investimento em %", "Nota Média"],
  ["Norte", 0.91, 0.24],
  ["Nordeste", 0.56, 0.95],
  ["Centro-Oeste", 1.0, 0.96],
  ["Sudeste", 0.7, 1.0],
  ["Sul", 0.34, 0.99],
];

const options: ChartWrapperOptions["options"] = {
  chart: {
    title: "Comparação de Investimento e Nota Média por Região",
  },
};

export function InvestmentAndAverageRating() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
