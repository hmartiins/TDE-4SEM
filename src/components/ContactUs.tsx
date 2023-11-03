import clsx from "clsx";

import { horizontalResponsiveClasses } from "../constants";
import { Input } from "./Input";

export function ContactUs() {
  return (
    <div className="flex flex-col">
      <section
        className={clsx([
          "w-full self-center max-w-full overflow-hidden px-5",
          "md:px-0",
          horizontalResponsiveClasses,
        ])}
      >
        <h3
          className={clsx([
            "text-center font-black text-sm uppercase text-slate-400 mt-14",
            "lg:text-lg",
          ])}
        >
          Entre em Contato
        </h3>

        <p className="text-white text-center font-black leading-[130%] text-[28px] mt-5">
          Sua <span className="text-blue-500">opinião</span> é importante para
          nós.
        </p>

        <p className="mt-5 text-center text-lg text-white leading-7">
          Dúvidas? Sugestões? Não hesite em nos contatar para qualquer pergunta
          ou comentário. Basta apenas preencher esse simples formulário abaixo.
        </p>
      </section>
    </div>
  );
}
