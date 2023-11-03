import clsx from "clsx";
import { LinkedinLogo, EnvelopeSimple } from "@phosphor-icons/react";

import { Button, Card } from ".";
import { MEMBERS, horizontalResponsiveClasses } from "../constants";

export function Hero() {
  return (
    <section className="relative max-w-full flex flex-col overflow-hidden">
      <header
        className={clsx([
          "w-full flex flex-col items-center z-40 relative",
          "md:self-center",
          "xl:mt-24 xl:gap-2 xl:self-center",
          horizontalResponsiveClasses,
        ])}
      >
        <h1
          className={clsx([
            "text-[40px] font-black text-white text-center px-5 pt-5'",
            "xl:w-2/3 xl:text-left xl:px-0 xl:self-start xl:text-7xl xl:leading-[80px]",
            horizontalResponsiveClasses,
          ])}
        >
          ENEM 2021: Educação e Finanças
        </h1>
        <h2
          className={clsx([
            "text-lg text-white text-center px-5 mt-5",
            "lg:w-1/2",
            "xl:w-3/4 xl:text-left xl:px-0 xl:self-start xl:text-2xl xl:leading-8",
            horizontalResponsiveClasses,
          ])}
        >
          Uma Análise Comparativa Utilizando Dados de Fontes Públicas para
          Compreender o Investimento Educacional
        </h2>

        <div
          className={clsx([
            "flex justify-center w-full mt-10 px-5 z-40",
            "md:px-0",
            "md:max-w-xl",
            "xl:w-1/2 xl:self-start",
          ])}
        >
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
          src="./assets/graphsExamples.webp"
          alt="Graficos"
        />

        <section
          className={clsx([
            "w-full relative z-40 px-5",
            "md:px-0",
            horizontalResponsiveClasses,
          ])}
        >
          <p
            className={clsx([
              "text-slate-300 font-bold text-lg mt-14 mb-8",
              "md:text-2xl",
            ])}
          >
            Integrantes do nosso grupo
          </p>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {MEMBERS.map((member) => (
              <Card key={member.name}>
                <div
                  className={clsx([
                    "flex gap-4 items-center px-5 py-5",
                    "sm:justify-between",
                    "xl:flex-col",
                  ])}
                >
                  <img
                    className={clsx([
                      "rounded-full border-2 border-white w-11",
                      "lg:w-16",
                      "xl:w-32",
                    ])}
                    src={member.image}
                    alt={member.name}
                    decoding="async"
                    loading="lazy"
                  />

                  <div className="xl:flex xl:flex-col xl:items-center">
                    <p
                      className={clsx([
                        "text-slate-200 font-bold",
                        "lg:text-xl lg:-mt-2",
                        "xl:text-2xl xl:mt-0",
                      ])}
                    >
                      {member.name}
                    </p>
                    <span
                      className={clsx([
                        "text-slate-300 -mt-1 block",
                        "lg:text-lg",
                      ])}
                    >
                      {member.age} anos
                    </span>

                    <div className="flex items-center gap-4 mt-2">
                      <a
                        href={member.lattesURL}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Abrir Lattes"
                        title="Abrir Lattes"
                        className={clsx([
                          "flex items-center gap-2 text-slate-300",
                          "lg:text-lg",
                        ])}
                      >
                        <img
                          alt="Logo do CNPQ"
                          aria-label="Logo do CNPQ"
                          width={15}
                          src="./assets/cnpqLogo.png"
                        />
                      </a>
                      <a
                        href={member.linkedinURL}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Abrir LinkedIn"
                        title="Abrir LinkedIn"
                        className={clsx([
                          "flex items-center gap-2 text-white",
                          "lg:text-lg",
                        ])}
                      >
                        <LinkedinLogo weight="bold" />
                      </a>

                      <a
                        title="Contatar por E-mail"
                        aria-label="Contatar por E-mail"
                        href={`mailto:${member.email}`}
                        className={clsx([
                          "flex items-center gap-2 text-white",
                          "lg:text-lg",
                        ])}
                      >
                        <EnvelopeSimple weight="bold" />
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <img
        className="z-10 opacity-70 absolute top-[400px] w-[180%] max-w-none md:w-[132%] md:left-[-80px] lg:w-full lg:top-[280px] lg:right-0 lg:left-auto xl:w-[1240px] xl:top-0"
        src="./assets/splash01.webp"
        alt="Splash Art"
      />
      <img
        className="hidden opacity-70 absolute z-20 w-[50%] top-0 right-0 xl:block"
        src="./assets/graphsExamplesDesktop.webp"
        alt="Graficos"
      />
    </section>
  );
}
