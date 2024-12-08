using DoQR.EmployeeRegister.Domain.Entities;
using System;
using Xunit;

namespace DoQR.EmployeeRegister.Tests.Entities
{
    public class FuncionarioTests
    {
        [Fact]
        public void Deve_Criar_Funcionario_Com_Dados_Validos()
        {
            // Arrange
            var funcionario = new Funcionario
            {
                Id = Guid.NewGuid(),
                Nome = "João Silva",
                Email = "joao.silva@email.com",
                CPF = "12345678900",
                Telefone = "11987654321",
                DataNascimento = new DateTime(1990, 5, 15),
                TipoContratacao = TipoContratacao.CLT,
                Status = StatusFuncionario.Ativo
            };

            // Assert
            Assert.NotNull(funcionario);
            Assert.Equal("João Silva", funcionario.Nome);
            Assert.Equal("joao.silva@email.com", funcionario.Email);
            Assert.Equal("12345678900", funcionario.CPF);
            Assert.Equal(TipoContratacao.CLT, funcionario.TipoContratacao);
            Assert.Equal(StatusFuncionario.Ativo, funcionario.Status);
        }
    }
}
