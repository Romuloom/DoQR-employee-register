"use client";

export default function Header() {
  return (
    <header className="p-4 px-28">
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
        <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 left-100">
          + Novo Funcionário
        </button>
      </div>
    </header>
  );
}
