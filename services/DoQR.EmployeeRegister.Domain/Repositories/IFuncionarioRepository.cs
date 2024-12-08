using DoQR.EmployeeRegister.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DoQR.EmployeeRegister.Domain.Repositories
{
    public interface IFuncionarioRepository
    {
        Task<Funcionario> AdicionarAsync(Funcionario funcionario);
        Task<Funcionario> AtualizarAsync(Funcionario funcionario);
        Task<bool> DeletarAsync(Guid id);
        Task<Funcionario> ObterPorIdAsync(Guid id);
        Task<IEnumerable<Funcionario>> ObterTodosAsync();
        Task<IEnumerable<Funcionario>> ObterPorNomeAsync(string nome);
    }
}
