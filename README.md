# Advanced SQL with MySQL and Knex

Este projeto foi desenvolvido para aprofundar o conhecimento em SQL e praticar a execução de queries utilizando o MySQL com a biblioteca Knex.js.

## Tecnologias e Ferramentas Utilizadas
- **SQL**: consultas executadas diretamente com o Knex `.raw`
- **MySQL Workbench**: para gerenciamento visual do banco de dados MySQL.
- **Knex.js**: query builder utilizado para construir consultas SQL no Node.js.
- **Docker e Docker Compose**: para configurar o ambiente com contêineres, facilitando o desenvolvimento e a execução do MySQL.
- **JavaScript (Node.js)**: base da aplicação, onde estão implementados scripts e integrações.

## Dependências

Para instalar as dependências, use o comando:

````bash
npm install
````
As principais dependências incluem:

- **Knex**: query builder.
- **MySQL**: integração com o banco de dados.

## Estrutura do Projeto
- **migrations/**: contém as migrações do banco de dados para gerenciar a estrutura das tabelas.
- **knexfile.js**: configurações do Knex para conectar ao banco de dados
- **knex/queries/**: contém as consultas SQL para testar diferentes comandos e funcionalidades com Knex.js.

