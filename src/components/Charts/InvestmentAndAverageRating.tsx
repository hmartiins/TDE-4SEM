import { Chart } from "react-google-charts";

const data = [
  ["Year", "Investimento em %", "Nota Média"],
  ["Norte", 1000, 400, 200],
  ["Nordeste", 1170, 460, 250],
  ["Centro-Oeste", 660, 1120, 300],
  ["Sudeste", 1030, 540, 350],
  ["Sul", 1030, 540, 350],
];

const options = {
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
