
# Guia de Configuração Geral

Este guia explica como configurar e rodar o sistema completo (backend e frontend) do **DoQR Employee Register**.

---

## Pré-requisitos

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas:

1. **Docker** (para o banco de dados)
   - [Instalar Docker](https://www.docker.com/get-started)
2. **SDK do .NET 8**
   - [Baixar .NET SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
3. **Node.js** (para o frontend)
   - [Baixar Node.js](https://nodejs.org/)
4. **Git** (para clonar o repositório)
   - [Baixar Git](https://git-scm.com/)

---

## Estrutura do Projeto

O projeto está organizado em dois diretórios principais:

1. **Backend (`services/`)**
   - Contém a API e todas as camadas do backend baseadas em **Domain-Driven Design**.
   - Utiliza **MySQL** como banco de dados (configurado via Docker).

2. **Frontend (`doqr-employee-frontend/`)**
   - Um frontend criado com **React** e **Next.js**, estilizado com **TailwindCSS**.
   - Consome a API do backend para realizar as operações.

3. **Documentação (`docs/`)**
   - Contém guias detalhados sobre o backend e o frontend.

---

## Configuração Geral

### 1. Clonar o Repositório

Execute o comando abaixo para clonar o repositório:

```bash
git clone https://github.com/seu-usuario/DoQR-employee-register.git
cd DoQR-employee-register
```

---

### 2. Subir o Banco de Dados com Docker

Inicie o banco de dados MySQL com o comando abaixo:

```bash
docker-compose up -d
```

> Isso iniciará o banco de dados na porta `3306` com as credenciais configuradas no arquivo `docker-compose.yml`.

---

### 3. Configurar o Backend

1. Navegue até a pasta `services/`:
   ```bash
   cd services
   ```

2. Restaure as dependências do backend:
   ```bash
   dotnet restore
   ```

3. Rode o backend:
   ```bash
   dotnet run --project DoQR.EmployeeRegister.Api
   ```

O backend estará disponível em: `http://localhost:5000`.

---

### 4. Configurar o Frontend

1. Navegue até a pasta do frontend:
   ```bash
   cd doqr-employee-frontend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Rode o frontend:
   ```bash
   npm run dev
   ```

O frontend estará disponível em: `http://localhost:3000`.

---

## Testes

### Backend
Para rodar os testes do backend:
```bash
cd services
dotnet test
```

### Frontend
No frontend, você pode rodar os testes com:
```bash
cd doqr-employee-frontend
npm test
```

---

## Configuração do Ambiente de Desenvolvimento

Certifique-se de configurar variáveis de ambiente se necessário. O arquivo `docker-compose.yml` já contém as configurações padrão para o banco de dados.

---

## Problemas Comuns

1. **Portas Ocupadas:**
   - Certifique-se de que as portas `5000` (backend) e `3000` (frontend) estão livres antes de rodar os serviços.

2. **Banco de Dados Não Conecta:**
   - Verifique se o Docker está rodando.
   - Certifique-se de que as credenciais no `docker-compose.yml` estão corretas.

3. **Erro de Dependências:**
   - Rode `dotnet restore` no backend ou `npm install` no frontend.

---

Agora você está pronto para rodar o sistema completo! Consulte os guias específicos em `docs/` para mais detalhes.
