"use client";

import EmployeeForm from "@/components/EmployeeForm";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";

export default function CadastroFuncionario() {
  const handleCadastro = (data: any) => {
    console.log("Funcionário cadastrado:", data);
    alert("Funcionário cadastrado com sucesso!");
  };

  const router = useRouter();

  return (
    <div className="">
      <Navbar />
      <div className="p-4 px-36">
        <h2 className="text-2xl font-bold text-gray-700">
          Cadastro de Funcionários
        </h2>
        <p className="text-gray-700">Empresa DoQR Tecnologia</p>
      </div>
      {/* Botão Voltar */}
      <div className="px-36">
        <button
          onClick={() => router.back()}
          className="text-gray-700 hover:underline flex items-center mb-6"
        >
          ← Voltar
        </button>
        <EmployeeForm onSubmit={handleCadastro} />
      </div>
    </div>
  );
}
