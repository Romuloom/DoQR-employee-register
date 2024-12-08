using DoQR.EmployeeRegister.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace DoQR.EmployeeRegister.Infrastructure.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Funcionario> Funcionarios { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configurações adicionais (exemplo: constraints)
            modelBuilder.Entity<Funcionario>()
                .HasKey(f => f.Id); // Chave primária
        }
    }
}
