import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["Feminino", 61.7],
  ["Masculino", 38.3],
];

const options = {
  title: "Distribuição de Gênero",
  is3D: true,
};

export function GenderDistribution() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"200px"}
    />
  );
}
