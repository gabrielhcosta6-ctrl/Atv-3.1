# Atividade 3.1 - Cadastro de Clientes

## Problema solucionado

O projeto foi desenvolvido para facilitar o cadastro e a visualização de clientes. A aplicação permite cadastrar nome, e-mail e telefone, enviando os dados para uma API e armazenando as informações no banco de dados.

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- Node.js
- Express
- MySQL
- HTML
- CSS
- Git e GitHub
- Postman

## Como executar o Front-End

Abra o terminal na pasta do projeto e execute:

npm install

Depois execute:

npm run dev

O Front-End será executado no endereço:

http://localhost:5173

## Como executar o Back-End

Abra outro terminal na pasta do projeto e execute:

node server.js

O Back-End será executado na porta 3000:

http://localhost:3000

## Rotas da API

### GET /clientes

Busca todos os clientes cadastrados no banco de dados.

GET http://localhost:3000/clientes

### POST /clientes

Cadastra um novo cliente no banco de dados.

POST http://localhost:3000/clientes

Exemplo dos dados enviados:

{
  "nome": "Gabriel",
  "email": "gabriel@gmail.com",
  "telefone": "71999999999"
}

## Estrutura do Banco de Dados

Banco de dados:

empresa_db

Tabela:

cliente

Campos:

- id - INT
- nome - VARCHAR(100)
- email - VARCHAR(100)
- telefone - VARCHAR(20)

## Funcionalidades

- Cadastro de produtos.
- Cadastro de clientes.
- Exibição dos produtos na tela.
- Exibição dos clientes na tela.
- Envio dos dados dos clientes utilizando fetch().
- Cadastro dos clientes no banco de dados MySQL.
- Consulta dos clientes através da API.
- Interface estilizada com CSS.
- Comunicação entre Front-End, Back-End e Banco de Dados.

## Integrantes

- Gabriel Henrique
- Kaique Nunes
