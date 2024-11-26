# Advanced SQL with MySQL and Knex

Este projeto foi desenvolvido para aprofundar o conhecimento em SQL e praticar a execução de queries utilizando o MySQL com a biblioteca Knex.js.

## 🚀 Tecnologias e Ferramentas Utilizadas
- **SQL**: consultas executadas diretamente com o Knex `.raw`
- **MySQL Workbench**: para gerenciamento visual do banco de dados MySQL.
- **Knex.js**: query builder utilizado para construir consultas SQL no Node.js.
- **Docker e Docker Compose**: para configurar o ambiente com contêineres, facilitando o desenvolvimento e a execução do MySQL.
- **JavaScript (Node.js)**: base da aplicação, onde estão implementados scripts e integrações.

## 🛠 Dependências
### Instalação
Para instalar as dependências, use o comando:

````bash
npm install
````
As principais dependências incluem:

- **Knex**: query builder.
- **MySQL**: integração com o banco de dados.

## 📂 Estrutura do Projeto
- **migrations/**: contém as migrações do banco de dados para gerenciar a estrutura das tabelas.
- **knexfile.js**: configurações do Knex para conectar ao banco de dados
- **knex/queries/**: contém as consultas SQL para testar diferentes comandos e funcionalidades com Knex.js.

## 🔧 Como Utilizar

1. **Clone o repositório**:
````bash
git clone https://github.com/pLogicador/advanced-sql-mysql-knex.git
````
2. **Inicie o ambiente Docker**: Certifique-se de ter o Docker instalado e execute:
````bash
docker-compose up -d
````
3. **Configure o arquivo `knexfile.js`** com as credenciais de acesso ao banco de dados.
4. **Execute as migrações**:
````bash
npx knex migrate:latest
````
5. **Teste as consultas**: Navegue até o diretório `knex/queries/` e execute os scripts para testar diferentes comandos SQL.


