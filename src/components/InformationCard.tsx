interface InformationCardProps {
  title: string;
  text: string;
}

export function InformationCard({ text, title }: InformationCardProps) {
  return (
    <article className="w-full flex gap-[18px]">
      <div className="w-[2px] bg-blue-500"></div>

      <div className="flex flex-col gap-[15px] py-2">
        <b className="text-white font-black text-lg">{title}</b>

        <p className="text-white opacity-70">{text}</p>
      </div>
    </article>
  );
}
