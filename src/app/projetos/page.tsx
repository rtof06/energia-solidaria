"use client";
import { useState, useEffect } from "react";
import Button from "@/components/Button/Button";
import Header from "@/components/Header/Header";
import Image from "next/image";
import projPic from "@/public/img/energia.jpg";
import Project from "@/components/Project/Project";
import { useRouter } from "next/navigation";

type Project = {
  id: number;
  nome: string;
  descricao: string;
  valor: number;
};

export default function PaginaProjetos() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useRouter();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/projeto-energia-solidaria/api/projetos`
        );
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError("Projetos não encontrados.");
        console.error("Erro ao buscar projetos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  function apoiarProjeto() {
    const valor = Number(prompt("Selecione o valor desejado:"));
    if (valor !== null) {
      alert(`Valor de R$${valor} apoiado! Obrigado pela doação.`)
      navigate.push("/");
    } else {
      return null;
    }
  }

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="title">APOIE CONOSCO!</h1>
        {loading ? (
          <div>Carregando projetos...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="project-card p-4 border rounded shadow flex flex-col"
              >
                <Project
                  cod={proj.id}
                  desc={proj.descricao}
                  name={proj.nome}
                  valor={proj.valor}
                  img={projPic}
                />
                <Button
                  type="button"
                  id={`btn-${proj.id}`}
                  title="Apoiar"
                  disabled={false}
                  onClick={apoiarProjeto}
                >
                  Apoiar
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
