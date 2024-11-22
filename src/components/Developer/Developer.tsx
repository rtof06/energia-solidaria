"use client";
import Image from "next/image";

type DevelopersProps = {
  name: string;
  rm: string;
  role: string;
  img: string;
  alt: string;
  linkedin: string;
  github: string;
  instagram: string;
};

export default function Developers({ name, rm, img }: DevelopersProps) {
  return (
    <div className="flex flex-col text-lg items-center font-normal text-center rounded-2xl hover:brightness-110 transition duration-200 ease-in">
      <Image
        src={img}
        alt="Foto do desenvolvedor"
        width={240}
        height={240}
        className="hover:shadow-3xl duration-1000 rounded-full"
      />
      <h1 className="text-2xl">{name}</h1>
      <h2>{rm}</h2>
    </div>
  );
}
