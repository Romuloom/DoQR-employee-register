import EmployeeForm from "@/components/EmployeeForm";

export default function EditarFuncionario({
  params,
}: {
  params: { id: string };
}) {
  const initialData = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123456789",
    cpf: "000.000.000-00",
    birthDate: "1990-01-01",
    contractType: "CLT",
    status: "Ativo",
  };

  const handleEdicao = (data: any) => {
    console.log("Funcionário atualizado:", data);
    alert("Funcionário atualizado com sucesso!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <EmployeeForm initialData={initialData} onSubmit={handleEdicao} />
    </div>
  );
}
