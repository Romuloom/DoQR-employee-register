
# Backend - DoQR Employee Register

## Estrutura
- **Api:** Camada de apresentação.
- **Application:** Casos de uso e serviços de aplicação.
- **Domain:** Entidades principais e interfaces.
- **Infrastructure:** Persistência e repositórios.

## Como Rodar
1. Suba o banco de dados:
   ```bash
   docker-compose up -d
   ```
2. Rode o backend:
   ```bash
   dotnet run --project services/DoQR.EmployeeRegister.Api
   ```
