"use client";
import Image from "next/image";
import logo2 from "@/public/logo2.png"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Inter } from "next/font/google";

const inter = Inter({subsets: ['latin']})


export default function Header() {
  const navigate = useRouter();

  return (
    <header
      className={`${inter.className} flex items-center justify-between p-3 bg-main-color text-black`}
    >
      <Link href={"/"} className="flex align-items-center p-2">
        <Image
          src={logo2}
          alt="Logo Energia Solidária"
          title="Página inicial"
          className="w-1/2 hover:brightness-125 transition-all"
        />
      </Link>
      <nav>
        <ul className="itens flex gap-4">
              <li className="hover:opacity-80 transition-all">
                <Link href="/projetos">PROJETOS</Link>
              </li>
              <li className="hover:opacity-80 transition-all">
                <Link href='/time'>TIME</Link>
              </li>
              <li className="hover:opacity-80 transition-all">
                <Link href='/login'>LOGIN</Link>
              </li>
        </ul>
      </nav>
    </header>
  );
}