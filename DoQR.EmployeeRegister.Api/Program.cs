using DoQR.EmployeeRegister.Domain.Repositories;
using DoQR.EmployeeRegister.Infrastructure.Data;
using DoQR.EmployeeRegister.Infrastructure.Repositories;
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

var app = builder.Build();

// Configura o Swagger no pipeline de middleware
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Configura o mapeamento dos controllers
app.MapControllers();

app.Run();
