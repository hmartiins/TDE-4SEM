import { Button, Card } from ".";
import { MEMBERS } from "../constants";

export function Hero() {
  return (
    <section className="max-w-full overflow-hidden">
      <h1 className="text-[40px] font-black text-white text-center mx-5 pt-5">
        ENEM 2021: Educação e Finanças
      </h1>
      <h2 className="text-lg text-white text-center mx-5 mt-5">
        Uma Análise Comparativa Utilizando Dados de Fontes Públicas para
        Compreender o Investimento Educacional
      </h2>

      <div className="relative w-full">
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
          className="z-20 w-full relative mt-10"
          src="./assets/graphsExamples.png"
          alt="Graficos"
        />
        <section className="relative z-20 mx-5">
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
    </section>
  );
}
