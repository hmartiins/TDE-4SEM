import clsx from "clsx";

import { horizontalResponsiveClasses } from "../../constants";
import { Select } from "..";
import Chart from "react-google-charts";

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
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
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
           <Chart chartType="ColumnChart" width="100%" data={data} />
        </div>
      </div>
    </div>
  );
}
