import LogoGrande from "@/public/img/logoGrande.png";
import fotoCriancas from "@/public/img/escola.jpeg";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({subsets: ['latin']})

export default function Home() {
  return (
    <section className="flex items-center justify-center bg-behind-color py-20">
      <div className="flex flex-col items-center text-center w-1/2">
        <figure>
          <Image src={LogoGrande} alt="logo do projeto inteira" className="w-64" />
        </figure>
        <p className={`${inter.className} px-20 2xl:px-40 text-gray-600`}>
          Somos um projeto de financiamento coletivo com o propósito de levar
          energia limpa e sustentável para escolas e postos de saúde da rede
          pública, conscientizando a população e respeitando o meio ambiente.
        </p>
      </div>
      <figure>
        <Image
          src={fotoCriancas}
          alt="foto de crianças vendo um painel de energia solar"
          className="w-full"
        />
      </figure>
    </section>
  );
}
