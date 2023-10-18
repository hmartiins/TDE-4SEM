import clsx from "clsx";

import { horizontalResponsiveClasses } from "../constants";

export function Information() {
  return (
    <div className="flex flex-col">
      <section
        className={
          clsx([
            "w-full self-center max-w-full overflow-hidden px-5",
            "md:px-0",
            horizontalResponsiveClasses,
          ])
        }
      >
        <h3
          className={
            clsx([
              "text-center font-black text-sm uppercase text-slate-400 mt-14",
              "lg:text-lg"
            ])
          }
        >
          Educação no Brasil
        </h3>

        <p className="text-white text-center font-black leading-[130%] text-[28px] mt-5">
          Invista com sabedoria, eduque com coragem{" "}
          <span className="text-blue-500">coragem</span>
        </p>

        <p className="mt-5 text-center text-lg text-white leading-7">
          Investir em educação influencia diretamente as notas do ENEM, destacando
          desigualdades sociais e a necessidade de promover igualdade de
          oportunidades.
        </p>

        <img
          className="z-20 mx-auto mt-7"
          src="./assets/binoculars.png"
          alt="A imagem exibe um binóculo centralizado na cena, com quatro pequenas estrelas azuis distribuídas ao redor do binóculo. O fundo da imagem é preenchido com alguns riscos que criam um padrão abstrato."
          decoding="async"
          loading="lazy"
        />
      </section>
    </div>
  );
}
