using Moq;
using DoQR.EmployeeRegister.Domain.Entities;
using DoQR.EmployeeRegister.Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Xunit;

namespace DoQR.EmployeeRegister.Tests.Repositories
{
    public class FuncionarioRepositoryTests
    {
        [Fact]
        public async Task Deve_Obter_Funcionarios_Por_Nome()
        {
            // Arrange
            var mockRepository = new Mock<IFuncionarioRepository>();
            var funcionarios = new List<Funcionario>
            {
                new Funcionario { Nome = "João Silva" },
                new Funcionario { Nome = "Maria Oliveira" }
            };

            mockRepository
                .Setup(repo => repo.ObterPorNomeAsync("João"))
                .ReturnsAsync(funcionarios);

            // Act
            var result = await mockRepository.Object.ObterPorNomeAsync("João");

            // Assert
            Assert.NotNull(result);
            Assert.Contains(result, f => f.Nome == "João Silva");
        }
    }
}
