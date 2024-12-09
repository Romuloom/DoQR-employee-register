"use client";

export default function EmployeeTable() {
  const employees = [
    {
      name: "John Doe",
      email: "joao@doqr.com.br",
      cpf: "111.222.333-44",
      phone: "1499123-4567",
      birthDate: "01/01/2000",
      contractType: "CLT",
      status: "Ativo",
    },
    {
      name: "Jane Doe",
      email: "jane@doqr.com.br",
      cpf: "222.333.444-55",
      phone: "1499123-4567",
      birthDate: "01/01/1990",
      contractType: "PJ",
      status: "Inativo",
    },
  ];

  return (
    <div className="overflow-x-auto p-6 px-36">
      <table className="w-full bg-white shadow-md rounded-lg border border-gray-300">
        {/* Cabeçalho */}
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-gray-700 font-medium">
              Nome
            </th>
            <th className="px-6 py-3 text-left text-gray-700 font-medium">
              E-mail
            </th>
            <th className="px-6 py-3 text-left text-gray-700 font-medium">
              CPF
            </th>
            <th className="px-6 py-3 text-left text-gray-700 font-medium">
              Celular
            </th>
            <th className="px-6 py-3 text-left text-gray-700 font-medium">
              Data de Nascimento
            </th>
            <th className="px-6 py-3 text-left text-gray-700 font-medium">
              Tipo Contratação
            </th>
            <th className="px-6 py-3 text-left text-gray-700 font-medium">
              Status
            </th>
            <th className="px-6 py-3 text-left text-gray-700 font-medium">
              Ação
            </th>
          </tr>
        </thead>

        {/* Corpo */}
        <tbody>
          {employees.map((employee, index) => (
            <tr
              key={index}
              className={`border-t ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              <td className="px-6 py-4 text-gray-800">{employee.name}</td>
              <td className="px-6 py-4 text-gray-800">{employee.email}</td>
              <td className="px-6 py-4 text-gray-800">{employee.cpf}</td>
              <td className="px-6 py-4 text-gray-800">{employee.phone}</td>
              <td className="px-6 py-4 text-gray-800">{employee.birthDate}</td>
              <td className="px-6 py-4 text-gray-800">
                {employee.contractType}
              </td>
              <td className="px-6 py-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    employee.status === "Ativo"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {employee.status}
                </span>
              </td>
              <td className="px-6 py-4 flex gap-4">
                <button className="text-blue-500 hover:text-blue-700">
                  ✏️
                </button>
                <button className="text-red-500 hover:text-red-700">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
