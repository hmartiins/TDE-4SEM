interface InformationCardProps {
  title: string;
}

export function InformationCard({ title }: InformationCardProps) {
  return (
    <article className="group w-full flex gap-[18px]">
      <div className="w-[2px] bg-gray-500 group-hover:bg-blue-500 transition-all duration-700"></div>

      <div className="flex flex-col gap-[15px] py-2">
        <b className="text-white font-black text-lg">{title}</b>

        {/* <p className="text-white opacity-70">{text}</p> */}
      </div>
    </article>
  );
}
