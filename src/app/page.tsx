import LogoGrande from "@/public/img/logoGrande.png";
import fotoCriancas from "@/public/img/escola.png";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({subsets: ['latin']})

export default function Home() {
  return (
    <section className="flex items-center justify-center px-20 bg-behind-color">
      <div className="flex flex-col items-center text-center px-10">
        <figure>
          <Image src={LogoGrande} alt="logo do projeto inteira" />
        </figure>
        <p className={inter.className}>
          Somos um projeto de financiamento coletivo com o propósito de levar
          energia limpa e sustentável para escolas e postos de saúde da rede
          pública, conscientizando a população e respeitando o meio ambiente.
        </p>
      </div>
      <figure>
        <Image
          src={fotoCriancas}
          alt="foto de crianças vendo um painel de energia solar"
        />
      </figure>
    </section>
  );
}
