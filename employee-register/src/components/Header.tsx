"use client";

import { useRouter } from "next/navigation";


export default function Header() {
     const router = useRouter();
  return (
    <header className="p-4 px-36">
      <h2 className="text-2xl font-bold text-gray-700">
        Controle de Funcionários
      </h2>
      <p className="text-gray-700">Empresa DoQR Tecnologia</p>
      <div className="mt-6 flex items-center gap-4 justify-between">
        <input
          type="text"
          placeholder="Buscar Funcionário..."
          className="w-full max-w-md border border-gray-300 rounded px-4 py-2 shadow-sm"
        />
        <button
          onClick={() => router.push("/funcionarios/cadastro")}
          className="bg-[#7541fa] text-white px-4 py-2 rounded hover:bg-purple-800 left-100"
        >
          + Novo Funcionário
        </button>
      </div>
    </header>
  );
}
