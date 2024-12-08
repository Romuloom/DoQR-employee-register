using DoQR.EmployeeRegister.Domain.Repositories;
using DoQR.EmployeeRegister.Infrastructure.Data;
using DoQR.EmployeeRegister.Infrastructure.Repositories;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Adiciona os serviços do MVC, incluindo controllers
builder.Services.AddControllers();

// Adiciona o contexto do banco de dados
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        new MySqlServerVersion(new Version(8, 0, 26))
    ));

// Adiciona o repositório ao contêiner de dependência
builder.Services.AddScoped<IFuncionarioRepository, FuncionarioRepository>();

// Adiciona serviços para Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Cria o aplicativo
var app = builder.Build();

// Configurações do pipeline de middleware
if (app.Environment.IsDevelopment())
{
    // Configura o Swagger no ambiente de desenvolvimento
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Configura redirecionamento HTTPS
app.UseHttpsRedirection();

// Configura autorização
app.UseAuthorization();

// Configura o mapeamento dos controllers
app.MapControllers();

// Inicia o aplicativo
app.Run();

// Tornar a classe Program acessível para testes
namespace DoQR.EmployeeRegister.Api
{
    public partial class Program
    {
        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<IStartup>();
                });
    }
}
