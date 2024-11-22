"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import { checkPassword } from "../validation/checkPassword";

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    codigo: "",
    nome: "",
    sobrenome: "",
    idade: "",
    email: "",
    telefone: "",
    numLogradouro: "",
    compLogradouro: "",
    password: "",
    secPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!checkPassword(formData.password, formData.secPassword)) {
      alert("As senhas não coincidem!");
      return;
    }

    const cliente = {
      codigo: formData.codigo,
      nome: formData.nome,
      sobrenome: formData.sobrenome,
      idade: formData.idade,
      email: formData.email,
      telefone: formData.telefone,
      numLogradouro: formData.numLogradouro,
      compLogradouro: formData.compLogradouro,
      password: formData.password,
    };

    try {
      const response = await fetch(
        `http://localhost:8080/projeto-energia-solidaria/api/clientes/cadastro`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cliente),
        }
      );

      if (response.ok) {
        alert("Cadastro realizado com sucesso!");
        router.push("/login");
      } else {
        const errorData = await response.json();
        alert(`Erro: ${errorData.message}`);
      }
    } catch (err) {
      console.error("Erro ao cadastrar cliente:", err);
      alert("Erro ao cadastrar cliente: " + err);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center  overflow-x-hidden">
        <div className="bg-white bg-opacity-50 p-8 rounded-lg m-8">
          <h1 className="title">
            FAZER CADASTRO
          </h1>
          <form className="text-center" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 mx-20 max-sm:flex max-sm:flex-col gap-3">
              <Input
                label="CPF"
                name="cpf"
                type="number"
                onChange={handleInputChange}
                required
              />
              <Input
                label="Nome"
                name="nome"
                onChange={handleInputChange}
                required
              />
              <Input
                label="Sobrenome"
                name="sobrenome"
                onChange={handleInputChange}
                required
              />
              <Input
                label="Idade"
                name="idade"
                onChange={handleInputChange}
                type="number"
                required
              />
              <Input
                label="Email"
                name="email"
                onChange={handleInputChange}
                type="email"
                required
              />
              <Input
                label="Telefone"
                name="telefone"
                onChange={handleInputChange}
                required
              />
              <Input
                label="Número"
                name="num_logradouro"
                onChange={handleInputChange}
                type="number"
                required
              />
              <Input
                label="Logradouro"
                name="logradouro"
                type="text"
                onChange={handleInputChange}
                required
              />
              <Input
                label="Senha"
                name="password"
                onChange={handleInputChange}
                type="password"
                required
              />
              <Input
                label="Confirme sua senha"
                name="secPassword"
                onChange={handleInputChange}
                type="password"
                required
              />
            </div>
            <Button
              type="submit"
              id="btnRegister"
              title={loading ? "Carregando..." : "Registrar"}
              disabled={loading}
            >
              {loading ? "Carregando..." : "Registrar"}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
