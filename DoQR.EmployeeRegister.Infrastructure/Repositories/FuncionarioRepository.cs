using DoQR.EmployeeRegister.Domain.Entities;
using DoQR.EmployeeRegister.Domain.Repositories;
using DoQR.EmployeeRegister.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoQR.EmployeeRegister.Infrastructure.Repositories
{
    public class FuncionarioRepository : IFuncionarioRepository
    {
        private readonly AppDbContext _context;

        public FuncionarioRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Funcionario> AdicionarAsync(Funcionario funcionario)
        {
            await _context.Funcionarios.AddAsync(funcionario);
            await _context.SaveChangesAsync();
            return funcionario;
        }

        public async Task<Funcionario> AtualizarAsync(Funcionario funcionario)
        {
            _context.Funcionarios.Update(funcionario);
            await _context.SaveChangesAsync();
            return funcionario;
        }

        public async Task<bool> DeletarAsync(Guid id)
        {
            var funcionario = await _context.Funcionarios.FindAsync(id);
            if (funcionario == null) return false;

            _context.Funcionarios.Remove(funcionario);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<Funcionario> ObterPorIdAsync(Guid id)
        {
            return await _context.Funcionarios.FindAsync(id);
        }

        public async Task<IEnumerable<Funcionario>> ObterTodosAsync()
        {
            return await _context.Funcionarios.ToListAsync();
        }

        public async Task<IEnumerable<Funcionario>> ObterPorNomeAsync(string nome)
        {
            return await _context.Funcionarios
                .Where(f => f.Nome.Contains(nome))
                .ToListAsync();
        }
    }
}
