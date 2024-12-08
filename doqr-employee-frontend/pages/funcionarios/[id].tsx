import { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import api from "../../services/api";

// Schema de validação usando Zod
const schema = z.object({
  nome: z.string().nonempty("Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  cpf: z.string().min(11, "CPF deve ter pelo menos 11 dígitos"),
  telefone: z.string().optional(),
  dataNascimento: z.string().nonempty("Data de nascimento é obrigatória"),
  tipoContratacao: z.enum(["CLT", "PJ"]),
  status: z.enum(["Ativo", "Inativo"]),
});

// Tipagem do formulário
type FuncionarioForm = z.infer<typeof schema>;

const FuncionarioFormPage = () => {
  const router = useRouter();
  const { id } = router.query; // Captura o ID da URL
  const isEdit = id !== "new"; // Define se estamos no modo edição

  // Configuração do formulário com validação
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FuncionarioForm>({
    resolver: zodResolver(schema),
  });

  // Carregar dados do funcionário no modo de edição
  useEffect(() => {
    if (isEdit) {
      const fetchFuncionario = async () => {
        const response = await api.get(`/api/funcionarios/${id}`);
        reset(response.data); // Preenche o formulário com os dados
      };
      fetchFuncionario();
    }
  }, [id, isEdit]);

  // Função para salvar ou atualizar os dados
  const onSubmit = async (data: FuncionarioForm) => {
    if (isEdit) {
      await api.put(`/api/funcionarios/${id}`, data);
    } else {
      await api.post("/api/funcionarios", data);
    }
    router.push("/"); // Redireciona para a página inicial
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        {isEdit ? "Editar Funcionário" : "Cadastrar Funcionário"}
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label>Nome</label>
          <input
            {...register("nome")}
            className="border p-2 w-full"
            placeholder="Digite o nome"
          />
          {errors.nome && (
            <span className="text-red-500">{errors.nome.message}</span>
          )}
        </div>
        <div>
          <label>E-mail</label>
          <input
            {...register("email")}
            className="border p-2 w-full"
            placeholder="Digite o e-mail"
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div>
          <label>CPF</label>
          <input
            {...register("cpf")}
            className="border p-2 w-full"
            placeholder="Digite o CPF"
          />
          {errors.cpf && (
            <span className="text-red-500">{errors.cpf.message}</span>
          )}
        </div>
        <div>
          <label>Telefone</label>
          <input
            {...register("telefone")}
            className="border p-2 w-full"
            placeholder="Digite o telefone"
          />
        </div>
        <div>
          <label>Data de Nascimento</label>
          <input
            {...register("dataNascimento")}
            type="date"
            className="border p-2 w-full"
          />
          {errors.dataNascimento && (
            <span className="text-red-500">
              {errors.dataNascimento.message}
            </span>
          )}
        </div>
        <div>
          <label>Tipo de Contratação</label>
          <select
            {...register("tipoContratacao")}
            className="border p-2 w-full"
          >
            <option value="CLT">CLT</option>
            <option value="PJ">PJ</option>
          </select>
        </div>
        <div>
          <label>Status</label>
          <select {...register("status")} className="border p-2 w-full">
            <option value="Ativo">Ativo</option>
            <option value="Inativo">Inativo</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {isEdit ? "Salvar" : "Cadastrar"}
        </button>
      </form>
    </div>
  );
};

export default FuncionarioFormPage;
