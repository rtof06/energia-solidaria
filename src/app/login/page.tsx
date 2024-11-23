"use client";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const validateEmail = (email: string) => {
    return email?.includes("@") && email?.includes(".");
  };

  const validatePassword = (password: string) => {
    return password?.length >= 4 && password?.length < 16;
  };

  const validateInputs = () => {
    return validateEmail(email) && validatePassword(password);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8080/projeto-energia-solidaria/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        router.push("/projetos");
      } else {
        alert("Usuário ou senha incorretos");
      }
    } catch (err) {
      alert("Algo deu errado." + err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-opacity-50 p-8 rounded-lg">
      <h1 className="title">LOGIN</h1>
      <form className="flex flex-col gap-4 max-sm:w-full xl:w-1/2" onSubmit={handleSubmit}>
        <div>
          <Input
            type="email"
            placeholder="Digite seu email"
            label="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <Input
            type="password"
            label="Senha"
            name="password"
            value={password}
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-5">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="rememberMe"
              id="rememberMe"
              className="appearance-none bg-white w-5 h-5 border-2 border-gray-400 rounded-md checked:bg-blue-500 checked:border-transparent transition duration-200"
            />
            Lembre-se de mim
          </label>
          <Link href="/esqueciMinhaSenha" className="w-fit text-gray-700 hover:border-b-2 hover:border-gray-700">
            Esqueceu a senha?
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <Button
            type="submit"
            id="btnLogin"
            title={loading ? "Login" : "Termine seu login"}
            disabled={loading || !validateInputs()}
          >
            LOGIN
          </Button>
        </div>
      </form>
      <div className="mt-10 text-center">
        <a
          href="/cadastro"
          className="p-4 rounded-lg bg-main-color shadow-md text-white transition duration-200 hover:bg-main-color-low-opacity hover:text-blue-500"
        >
          Não possui cadastro? <strong>Cadastre-se aqui!</strong>
        </a>
      </div>
    </div>
  );
}
