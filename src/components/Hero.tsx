import { Button } from ".";

export function Hero() {
  return (
    <section className="max-w-full overflow-hidden">
      <h1 className="text-[40px] font-black text-white text-center mx-5 pt-5">
        Análise Enem Com O Passar Dos Anos!
      </h1>
      <h2 className="text-lg text-white text-center mx-5 mt-5">
        Análise de dados realizadas pelos alunos da Universidade Católica de
        Santos com base em dados de fontes abertas.
      </h2>

      <div className="relative w-full h-screen">
        <div className="flex justify-center mt-10 mx-5">
          <Button
            type="button"
            title="Baixar Documento"
            aria-label="Baixar Documento"
          >
            Baixar Documento
          </Button>
        </div>

        <img
          className="z-10 absolute translate-x-[-15%] max-w-none"
          src="./assets/splash01.png"
          alt="aa"
        />

        <img
          className="z-20 w-full relative"
          src="./assets/graphsExamples.png"
          alt="aa"
        />
      </div>
    </section>
  );
}
