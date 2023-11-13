import clsx from "clsx";

import { InformationCard } from ".";
import { horizontalResponsiveClasses } from "../constants";

export function Description() {
  return (
    <div className="flex flex-col">
      <section
        className={clsx([
          "w-full self-center max-w-full overflow-hidden px-5 mt-14",
          "md:px-0",
          horizontalResponsiveClasses,
        ])}
      >
        <h4 className="font-black text-white text-[28px] mb-7">
          As perguntas que queriamos{" "}
          <span className="text-blue-500">sanar</span>
        </h4>

        <div className="flex flex-col gap-5">
          <InformationCard
            title="O desempenho dos estudantes brasileiros reflete os investimentos?"
            text="Every team has a unique process for shipping software. Use an
            out-of-the-box workflow, or create one to match the way your team
            works."
          />
          <InformationCard
            title="Disparidade entre estudantes de escolas públicas e escolas privada"
            text="Every team has a unique process for shipping software. Use an
            out-of-the-box workflow, or create one to match the way your team
            works."
          />
          <InformationCard
            title="Gastos aplicados de forma equitativa"
            text="Every team has a unique process for shipping software. Use an
            out-of-the-box workflow, or create one to match the way your team
            works."
          />
        </div>

        <img
          className="z-20 mx-auto mt-7"
          src="./assets/lighting.webp"
          alt="A imagem retrata uma cena noturna com um abajur em cima de uma mesa, situada sob um céu estrelado. O abajur emite uma luz suave que ilumina as estrelas ao redor. As cores predominantes na imagem são branco, azul e preto."
          decoding="async"
          loading="lazy"
        />
      </section>
    </div>
  );
}
