import { NextResponse } from 'next/server';

export async function PUT(request: Request) {

  try {
    const { codigo, nome, sobrenome, idade, email, telefone, numLogradouro, compLogradouro, password } = await request.json();

    const response = await fetch(`http://localhost:8080/projeto-energia-solidaria/api/clientes/cadastro`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ codigo, nome, sobrenome, idade, email, telefone, compLogradouro, numLogradouro, password }),
    });

    if (response.ok) {
      const data = await response.json();
      return NextResponse.json(data, { status: 200 });
    } else {
      const errorData = await response.json();
      return NextResponse.json(errorData, { status: response.status });
    }
  } catch (err) {
    return NextResponse.json({ message: 'Algo deu errado.', err }, { status: 500 });
  }
}