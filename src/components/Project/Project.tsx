import Image, { StaticImageData } from "next/image";

type DeveloperProps = {
  cod:number;
  name: string;
  desc: string;
  valor: number;
  img: StaticImageData | string;
};

export default function Project({ name, desc, img, valor }: DeveloperProps) {
  return (
    <div className="hover:shadow-xl hover:animate-pulse duration-1000 text-center p-16">
      <Image
        src={img}
        alt="Foto do Projeto"
        width={240}
        height={240}
        className="rounded-2xl"
      />
      <h1>{name}</h1>
      <h2>{desc}</h2>
      <h2>R${valor}</h2>
    </div>
  );
}
