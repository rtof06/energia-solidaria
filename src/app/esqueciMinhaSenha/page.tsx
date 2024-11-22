"use client"
import Input from "@/components/Input/Input";
import { useState } from "react";

export default function EsqueciSenha() {
  const [email, setEmail] = useState("");

  return (
    <>
      <div
        className={`flex flex-col items-center bg-opacity-50 p-8 rounded-lg`}
      >
        <Input
          label="Digite seu email"
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value=""
          required
        />
      </div>
    </>
  );
}
