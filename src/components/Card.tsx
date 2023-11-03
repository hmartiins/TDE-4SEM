import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <div className="w-full relative hover:scale-110 transition-all duration-500">
      <div className="absolute w-full h-full bg-white opacity-5 pointer-events-none"></div>
      {children}
    </div>
  );
}
