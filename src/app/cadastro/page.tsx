"use client";

import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import Header from '@/components/Header/Header';
import { checkPassword } from '../validation/checkPassword';

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    idade: '',
    email: '',
    telefone: '',
    logradouro: '',
    num_logradouro: '',
    password: '',
    secPassword: '',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:8080/projeto-energia-solidaria/api/cadastro');
        const data = await response.json();
        setFormData((prevData) => ({
          ...prevData,
          nome: data.nome,
          sobrenome: data.sobrenome,
          idade: data.idade,
          email: data.email,
          telefone: data.telefone,
          logradouro: data.logradouro,
          num_logradouro: data.num_logradouro,
        }));
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
      nome: formData.nome,
      sobrenome: formData.sobrenome,
      idade: formData.idade,
      email: formData.email,
      telefone: formData.telefone,
      logradouro: formData.logradouro,
      num_logradouro: formData.num_logradouro,
      password: formData.password,
    };

    try {
      const response = await fetch(`http://localhost:8080/projeto-energia-solidaria/api/clientes/cadastro`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cliente),
      });

      if (response.ok) {
        alert("Cadastro realizado com sucesso!");
        router.push("/diagnostico");
      } else {
        const errorData = await response.json();
        alert(`Erro: ${errorData.message}`);
      }
    } catch (err) {
      console.error('Erro ao cadastrar cliente:', err);
      alert("Erro ao cadastrar cliente: " + err);
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center  overflow-x-hidden">
        <div className="bg-white bg-opacity-50 p-8 rounded-lg m-8">
          <h1 className={`text-center font-normal text-gray-700`}>
            FAZER CADASTRO
          </h1>
          <form className="text-center" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 mx-20 max-sm:flex max-sm:flex-col gap-3">
              <Input label="Nome" name="nome" value={formData.nome} onChange={handleInputChange} required />
              <Input label="Sobrenome" name="sobrenome" value={formData.sobrenome} onChange={handleInputChange} required />
              <Input label="Idade" name="idade" value={formData.idade} onChange={handleInputChange} type="number" required />
              <Input label="Email" name="email" value={formData.email} onChange={handleInputChange} type="email" required />
              <Input label="Telefone" name="telefone" value={formData.telefone} onChange={handleInputChange} required />
              <Input label="Logradouro" name="logradouro" value={formData.logradouro} onChange={handleInputChange} required />
              <Input label="Número" name="num_logradouro" value={formData.num_logradouro} onChange={handleInputChange} type="number" required />
              <Input label="Senha" name="password" value={formData.password} onChange={handleInputChange} type="password" required />
              <Input label="Confirme sua senha" name="secPassword" value={formData.secPassword} onChange={handleInputChange} type="password" required />
            </div>
            <Button
              type="submit"
              id="btnRegister"
              title={loading ? 'Carregando...' : 'Registrar'}
              disabled={loading}
            >
              {loading ? 'Carregando...' : 'Registrar'}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
