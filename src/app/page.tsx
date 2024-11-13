import LogoGrande from "@/public/logoGrande.png";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <figure>
        <Image src={LogoGrande} alt="logo do projeto inteira" />
      </figure>
      <p>Somos um projeto de financiamento coletivo com o propósito de levar energia limpa e sustentável para escolas e postos de saúde da rede pública, conscientizando a população e respeitando o meio ambiente.</p>
    </>
  );
}
