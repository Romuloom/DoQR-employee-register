
# DoQR Employee Register

## **Descrição**
Este projeto é um microserviço desenvolvido em **.NET 8** para gerenciar funcionários. Ele permite realizar operações CRUD, como:
- Inserir funcionário
- Editar funcionário
- Excluir funcionário
- Consultar funcionários (listar todos ou filtrar por nome)

O projeto segue as boas práticas de programação, usando o padrão **DDD (Domain-Driven Design)** e uma arquitetura modular para facilitar a manutenção e a escalabilidade.

---

## **Pré-requisitos**
Para rodar este projeto, você precisará ter instalado:
1. **SDK do .NET 8.0** (ou superior)
   - [Baixe o .NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
2. **Docker** para gerenciar o banco de dados MySQL
   - [Baixe o Docker](https://www.docker.com/)
3. **Git** (opcional, para clonar o repositório)
   - [Baixe o Git](https://git-scm.com/)

---

## **Configuração do Banco de Dados**
O projeto utiliza **MySQL** como banco de dados, configurado com o Docker. Siga os passos abaixo para configurá-lo:

1. Certifique-se de que o Docker está instalado e rodando.
2. No diretório raiz do projeto, crie e inicie o banco de dados com o seguinte comando:
   ```bash
   docker-compose up -d
   ```
3. O banco de dados será criado na porta **3306** com as seguintes credenciais:
   - **Usuário:** `employee_user`
   - **Senha:** `employee_password`
   - **Database:** `EmployeeRegisterDb`

4. Confirme se o banco está rodando:
   ```bash
   docker ps
   ```

---

## **Como Rodar o Projeto**

Siga os passos abaixo para rodar a aplicação:

### 1. **Clone o Repositório**
   ```bash
   git clone https://github.com/seu-repositorio/DoQR-employee-register.git
   cd DoQR-employee-register
   ```

### 2. **Restaure as Dependências**
   Antes de compilar, certifique-se de que todas as dependências estão instaladas:
   ```bash
   dotnet restore
   ```

### 3. **Compile e Rode o Projeto**
   Execute o seguinte comando para iniciar o servidor da API:
   ```bash
   dotnet run --project DoQR.EmployeeRegister.Api
   ```

   Por padrão, a aplicação estará disponível em:
   - **API Base:** `http://localhost:5000`
   - **Swagger (Documentação):** `http://localhost:5000/swagger`

---

## **Arquitetura do Projeto**
O projeto foi desenvolvido seguindo o padrão **Domain-Driven Design (DDD)**. Ele é estruturado em camadas bem definidas:

### Estrutura de Pastas:
```plaintext
src/
├── DoQR.EmployeeRegister.Api/           # Camada de apresentação (controllers e configuração da API)
├── DoQR.EmployeeRegister.Application/   # Camada de aplicação (serviços de aplicação, DTOs)
├── DoQR.EmployeeRegister.Domain/        # Camada de domínio (entidades, interfaces e lógica de negócios)
├── DoQR.EmployeeRegister.Infrastructure/ # Camada de infraestrutura (banco de dados, repositórios)
tests/
├── DoQR.EmployeeRegister.Tests/         # Testes unitários e de integração
```

### Camadas Explicadas:
1. **Domain (Domínio):**
   - Contém as entidades e regras de negócio principais.
   - Exemplo: `Funcionario`, `IFuncionarioRepository`.

2. **Application (Aplicação):**
   - Contém serviços de aplicação para orquestrar os casos de uso.
   - Define DTOs (Data Transfer Objects) para comunicação entre as camadas.

3. **Infrastructure (Infraestrutura):**
   - Implementa os repositórios e gerencia a persistência de dados usando o **Entity Framework Core**.

4. **API (Apresentação):**
   - Contém os controllers e as configurações para expor os endpoints REST.
   - Documentação configurada com **Swagger**.

---

## **Testes Automatizados**
O projeto inclui cobertura de testes unitários e de integração utilizando o **xUnit**.

### Executando os Testes
1. Para rodar os testes:
   ```bash
   dotnet test
   ```

2. Os testes de integração utilizam o **SQLite in-memory** para simular o banco de dados, garantindo que os testes sejam isolados e consistentes.

---

## **Histórico de CI/CD**
Inicialmente, o projeto foi configurado para usar **GitHub Actions** para CI/CD (build e testes automatizados). No entanto, essa funcionalidade foi removida para simplificar o desenvolvimento. O diretório `.github/workflows` não está mais presente.

---

## **Próximos Passos**
- Configurar autenticação (se necessário).
- Criar uma interface web ou cliente para consumir a API.

---

## **Contribuindo**
Siga os passos para contribuir:
1. Faça um fork do repositório.
2. Crie uma branch para suas alterações:
   ```bash
   git checkout -b sua-branch
   ```
3. Faça suas alterações e envie-as:
   ```bash
   git push origin sua-branch
   ```
4. Abra um Pull Request.

---

## **Licença**
Este projeto está licenciado sob a [MIT License](LICENSE).
