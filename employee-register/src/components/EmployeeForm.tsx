"use client";

import { useState } from "react";

interface EmployeeFormProps {
  initialData?: {
    name: string;
    email: string;
    phone: string;
    cpf: string;
    birthDate: string;
    contractType: string;
    status: string;
  };
  onSubmit: (data: any) => void;
}

export default function EmployeeForm({
  initialData,
  onSubmit,
}: EmployeeFormProps) {


  const [formData, setFormData] = useState(
    initialData || {
      name: "",
      email: "",
      phone: "",
      cpf: "",
      birthDate: "",
      contractType: "",
      status: "",
    }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className=" bg-white shadow-md rounded-lg border border-gray-300 px-12 py-4">
      {/* Formulário */}
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Nome
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nome"
            className="w-full border border-gray-300 rounded-lg p-2"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e-mail"
            className="w-full border border-gray-300 rounded-lg p-2"
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-gray-700 font-semibold mb-2"
          >
            Celular
          </label>
          <input
            type="text"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(99) 99999-9999"
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>
        <div>
          <label
            htmlFor="cpf"
            className="block text-gray-700 font-semibold mb-2"
          >
            CPF
          </label>
          <input
            type="text"
            id="cpf"
            value={formData.cpf}
            onChange={handleChange}
            placeholder="000.000.000-00"
            className="w-full border border-gray-300 rounded-lg p-2"
            required
          />
        </div>
        <div>
          <label
            htmlFor="birthDate"
            className="block text-gray-700 font-semibold mb-2"
          >
            Data de Nascimento
          </label>
          <input
            type="date"
            id="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
            required
          />
        </div>
        <div>
          <label
            htmlFor="contractType"
            className="block text-gray-700 font-semibold mb-2"
          >
            Tipo de Contratação
          </label>
          <select
            id="contractType"
            value={formData.contractType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
          >
            <option value="">Selecione uma opção...</option>
            <option value="CLT">CLT</option>
            <option value="PJ">PJ</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="status"
            className="block text-gray-700 font-semibold mb-2"
          >
            Status
          </label>
          <select
            id="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
            required
          >
            <option value="">Selecione uma opção...</option>
            <option value="Ativo">Ativo</option>
            <option value="Inativo">Inativo</option>
          </select>
        </div>
        <div className="col-span-2">
          <button
            type="submit"
            className="w-36 h-10 mt-5 bg-[#7541fa] text-white py-2 rounded-lg hover:bg-purple-800"
          >
            {initialData ? "Salvar Alterações" : "Cadastrar"}
          </button>
        </div>
      </form>
    </div>
  );
}
