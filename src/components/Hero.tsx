import clsx from "clsx";

import { Button, Card } from ".";
import { MEMBERS, horizontalResponsiveClasses } from "../constants";

export function Hero() {
  return (
    <section className="relative max-w-full flex flex-col overflow-hidden">
      <header
        className={
          clsx([
            "w-full flex flex-col items-center z-40 relative",
            "md:self-center",
            "xl:mt-24 xl:gap-2 xl:self-center",
            horizontalResponsiveClasses,
          ])
        }
      >
        <h1 className={
          clsx([
            "text-[40px] font-black text-white text-center px-5 pt-5'",
            "xl:w-2/3 xl:text-left xl:px-0 xl:self-start xl:text-7xl xl:leading-[80px]",
            horizontalResponsiveClasses,
          ])
        }>
          ENEM 2021: Educação e Finanças
        </h1>
        <h2 className={
          clsx([
            "text-lg text-white text-center px-5 mt-5",
            "lg:w-1/2",
            "xl:w-3/4 xl:text-left xl:px-0 xl:self-start xl:text-2xl xl:leading-8",
            horizontalResponsiveClasses,
          ])
        }>
          Uma Análise Comparativa Utilizando Dados de Fontes Públicas para
          Compreender o Investimento Educacional
        </h2> 

        <div className={
          clsx([
            "flex justify-center w-full mt-10 px-5 z-40",
            "md:px-0",
            "md:max-w-xl",
            "xl:w-1/2 xl:self-start",
          ])
        }>
          <Button
            type="button"
            title="Baixar Documento"
            aria-label="Baixar Documento"
          >
            Baixar Documento
          </Button>
        </div>
      </header>

      <div className="w-full flex flex-col items-center xl:mt-72">
        <img
          className="z-20 w-full relative mt-10 xl:hidden"
          src="./assets/graphsExamples.png"
          alt="Graficos"
        /> 

        <section className={
          clsx([
            "w-full relative z-40 px-5",
            "md:px-0",
            horizontalResponsiveClasses,
          ])
        }>
          <p className="text-white font-bold text-lg mt-14 mb-8">
            Integrantes do nosso grupo
          </p>

          <div className="grid grid-cols-2 gap-2">
            {MEMBERS.map((member) => (
              <Card key={member.name}>
                <div className="flex justify-between gap-2 items-center px-5 py-5">
                  <img
                    className="rounded-full border-2 border-white w-11"
                    src={member.image}
                    alt={member.name}
                    decoding="async"
                    loading="lazy"
                  />

                  <div>
                    <p className="text-white font-bold">{member.name}</p>
                    <span className="text-white -mt-1 block">
                      {member.age} anos
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div> 

      <img
        className="z-10 opacity-70 absolute top-[400px] w-[180%] max-w-none md:w-[132%] md:left-[-80px] lg:w-full lg:top-[280px] lg:right-0 lg:left-auto xl:w-[1240px] xl:top-0"
        src="./assets/splash01.png"
        alt="aa"
      />
      <img
        className="hidden opacity-70 absolute z-20 w-[50%] top-0 right-0 xl:block"
        src="./assets/graphsExamplesDesktop.png"
        alt="Graficos"
      />
    </section>
  );
}
