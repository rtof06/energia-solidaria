import Image, { StaticImageData } from "next/image";

type DeveloperProps = {
  name: string;
  rm: string;
  img: StaticImageData | string;
};

export default function Developer({ name, rm, img }: DeveloperProps) {
  return (
    <div className="text-center p-16">
      <Image src={img} alt="Foto do desenvolvedor" width={240} height={240} className="hover:cursor-pointer hover:shadow-xl hover:animate-pulse duration-1000 rounded-full"/>
      <h1>{name}</h1>
      <h2>{rm}</h2>
    </div>
  );
}
