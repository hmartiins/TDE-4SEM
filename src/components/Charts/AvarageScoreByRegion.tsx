import { Chart } from "react-google-charts";

const data = [
  ["Element", "Nota média", { role: "style" }],
  ["Sudeste", 537.2, ""],
  ["Sul", 530.7, ""],
  ["Centro-Oeste", 512.2, ""],
  ["Nordeste", 507.7, ""],
  ["Norte", 486.9, ""],
];

export function AvarageScoreByRegion() {
  return (
    <Chart chartType="ColumnChart" width="100%" height="200px" data={data} />
  );
}
