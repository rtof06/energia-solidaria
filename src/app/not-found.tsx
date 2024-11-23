import Link from "next/link";


export default function notFound() {
  return (
    <div className="flex flex-col justify-center text-center p-5 h-screen">
      <h1 className="title">PÁGINA NÃO ENCONTRADA.</h1>
      <h1 className="title">ERRO 404</h1>
      <Link href="/">Voltar para onde estava</Link>
    </div>
  )
}
