import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["Centro-Oeste", 35.1],
  ["Nordeste", 19.8],
  ["Norte", 8.4],
  ["Sul", 12.1],
  ["Sudeste", 24.7],
];

const options = {
  title: "Porcentagens de Investimento em cada região do Brasil",
  is3D: true,
};

export function RegionPercentage() {
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
