using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Testing;
using Xunit;

public class FuncionariosControllerTests : IClassFixture<WebApplicationFactory<DoQR.EmployeeRegister.Api.Program>>
{
    private readonly HttpClient _client;

    public FuncionariosControllerTests(WebApplicationFactory<DoQR.EmployeeRegister.Api.Program> factory)
    {
        _client = factory.CreateClient();
    }

    [Fact]
    public async Task Deve_Criar_Funcionario_Com_Sucesso()
    {
        // Arrange
        var funcionario = new
        {
            Nome = "João Silva",
            Email = "joao.silva@email.com",
            CPF = "12345678900",
            Telefone = "11987654321",
            DataNascimento = "1990-05-15",
            TipoContratacao = 0, // CLT
            Status = 0 // Ativo
        };

        var content = new StringContent(JsonSerializer.Serialize(funcionario), Encoding.UTF8, "application/json");

        // Act
        var response = await _client.PostAsync("/api/funcionarios", content);

        // Assert
        response.EnsureSuccessStatusCode();
        var responseBody = await response.Content.ReadAsStringAsync();
        Assert.Contains("João Silva", responseBody);
    }
}
