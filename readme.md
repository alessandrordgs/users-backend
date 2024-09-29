# Users Backend

Este é o backend para o gerenciamento de usuários, construído com Node.js, Express e Prisma.

## Pré-requisitos

- Node.js (versão 18 ou superior)
- npm (versão 10 ou superior)

## Instalação

1. Clone o repositório:

  ```sh
  git clone https://github.com/alessandrordgs/users-backend.git
  cd users-backend
  ```

2. Instale as dependências:

  ```sh
  npm install
  ```

3. Configure as variáveis de ambiente:

  Crie um arquivo `.env` na raiz do projeto e adicione as variáveis necessárias. Exemplo:

  ```env
  SERVER_PORT=3000
  DATABASE_URL="file:./dev.db"
  ```

## Migrações do Banco de Dados

1. Execute as migrações do Prisma para configurar o banco de dados:

  ```sh
  npx prisma db push
  ```

2.Popule o banco de dados com dados iniciais:

  ```sh
  npx ts-node prisma/seed.ts
  ```

## Execução do Projeto

### Ambiente de Desenvolvimento

Para iniciar o servidor em modo de desenvolvimento com hot-reload:

```sh
npm run dev

npm test

```

Para executar os testes

```sh
npm test
```
