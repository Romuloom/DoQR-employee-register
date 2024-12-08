import { useEffect, useState } from "react";
import api from "../services/api";

interface Funcionario {
  id: string;
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  dataNascimento: string;
  tipoContratacao: "CLT" | "PJ";
  status: "Ativo" | "Inativo";
}

const Home = () => {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);

  useEffect(() => {
    const fetchFuncionarios = async () => {
      const response = await api.get<Funcionario[]>("/api/funcionarios");
      setFuncionarios(response.data);
    };

    fetchFuncionarios();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Controle de Funcionários</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border p-2">Nome</th>
            <th className="border p-2">E-mail</th>
            <th className="border p-2">CPF</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {funcionarios.map((funcionario) => (
            <tr key={funcionario.id}>
              <td className="border p-2">{funcionario.nome}</td>
              <td className="border p-2">{funcionario.email}</td>
              <td className="border p-2">{funcionario.cpf}</td>
              <td className="border p-2">{funcionario.status}</td>
              <td className="border p-2">
                {/* Botões para editar e excluir */}
                <button className="text-blue-500">Editar</button>
                <button className="text-red-500 ml-2">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
