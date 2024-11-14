"use client";
import Image from "next/image";
import logo2 from "@/public/logo2.png"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { mainFontFamily } from "@/app/fonts";

type HeaderProps = {
  page: string;
  path: string;
};

export default function Header({ page, path }: HeaderProps) {
  const navigate = useRouter();

  const handleGoBack = () => {
    navigate.back();
  };

  return (
    <header
      className={`${mainFontFamily.className} flex flex-col items-center justify-center p-3 bg-main-color text-white`}
    >
      <Link href={"/"} className="flex justify-center p-2">
        <Image
          src={logo2}
          alt="Logo Energia Solidária"
          title="Página inicial"
          className="w-1/2 hover:brightness-125 transition-all"
        />
      </Link>
      <nav>
        <ul className="itens flex gap-4">
          {page === "VOLTAR" ? (
            <li className="hover:opacity-80 transition-all">
              <Link href="#" onClick={handleGoBack}>
                {page}
              </Link>
            </li>
          ) : (
            <>
              <li className="hover:opacity-80 transition-all">
                <Link href="/oficinas">PROJETOS</Link>
              </li>
              <li className="hover:opacity-80 transition-all">
                <Link href={path}>{page}</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}