import { InformationCard } from ".";

export function Description() {
  return (
    <section className="max-w-full overflow-hidden mx-5 mt-14">
      <p className="text-white font-black text-sm mb-5 uppercase">
        key benefits
      </p>

      <h4 className="font-black text-white text-[28px] mb-7">
        Your business will reach{" "}
        <span className="text-blue-500">unprecedented heights</span>
      </h4>

      <div className="flex flex-col gap-5">
        <InformationCard
          title="Be more productive"
          text="Every team has a unique process for shipping software. Use an
          out-of-the-box workflow, or create one to match the way your team
          works."
        />
        <InformationCard
          title="Be more productive"
          text="Every team has a unique process for shipping software. Use an
          out-of-the-box workflow, or create one to match the way your team
          works."
        />
        <InformationCard
          title="Be more productive"
          text="Every team has a unique process for shipping software. Use an
          out-of-the-box workflow, or create one to match the way your team
          works."
        />
      </div>

      <img
        className="z-20 mx-auto mt-7"
        src="./assets/lighting.png"
        alt="Luminaria"
      />
    </section>
  );
}
