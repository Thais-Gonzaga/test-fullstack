<img src="./frontend/public/logoHeader.png" height="60">

# Gerenciamento de Clientes

## Sumário

- [Introdução](#introdução)
- [Instruções local](#instruções)
- [Frontend](#frontend)
- [Pages](#pages)
  - [Tela inicial](#tela-inicial)
  - [Tela de Edição](#tela-edição)
  - [Tela de Criação](#tela-criação)
- [Backend](#backend)
- [Configuração local](#configuração-local)
- [Rotas](#rotas)
  - [Customers](#customers)

## Introdução:

O objtivo desse projeto é criar um aplicativo que permita aos usuários visualizar e criar clientes. O aplicativo consiste em duas partes: o frontend e o backend. O frontend será responsável pela interface do usuário e a comunicação com a API. O backend será responsável pelo armazenamento e gerenciamento dos dados dos clientes.

## Instruções

1. Clone o repositório do projeto:

```
git clone git@github.com:uoldevs/test-fullstack.git
```

2. Acesse a pasta do projeto:

```
cd test-fullstack
```

3. Mude para branch develop/thais-gonzaga:

```
git checkout develop/thais-gonzaga
```

4. Na raiz do projeto, crie o arquivo .env com as variáveis de ambiente que temos no arquivo .env.exemple

5. Acesse a pasta backend :

```
cd backend
```

6. Instale as dependências :

```
npm install
```

7. Inicie a aplicação :

```
npm run dev
```

8. abra um nova janela do terminal no diretorio test-fullstack

9. Acesse a pasta frontend :

```
cd frontend
```

10. Instale as dependências :

```
npm install
```

11. Inicie a aplicação :

```
npm run dev
```

# Frontend do projeto

A aplicação frontend foi criada utilizando o framework React com TypeScript e a ferramenta Vite em node.js. Também utilizado bibliotecas zod para validação, shadcn ui para criação de componentes customizados e Tailwind CSS para estilização e responsividade. Além disso, foi usado SWR react Hooks para data fetching.

# Pages

## Tela inicial

<img src="./frontend/public/telaInicial.gif">

## Tela de edição

<img src="./frontend/public/telaEdicao.gif">

## Tela de criação

<img src="./frontend/public/telaCriação.gif">

# Backend

O backend foi desenvolvido em node.js usando o typescript, a biblioteca TypeORM para interação com o banco de dados SQLite. Também foi utilizado uma arquitetura em camadas denominadas Model, Service e Controller.
Os endpoints tem funcionalidade necessária para cadastrar, listar e atualizar clientes da uol.

# Rotas

## Customers

### POST /customers

A rota POST `/customers` é utilizada para cadastrar um novo cliente da uol com informações válidas no banco de dados.

entrada:

```json
{
  "body": {
    "name": "Customer Uol",
    "email": "customer@uol.com",
    "individualTaxpayer": "348.381.291-14",
    "phone": "(11) 98755-7882",
    "status": "ACTIVE"
  }
}
```

saída _(status: 201)_:

```json
{
[
  {
    "id": 1,
    "name": "Customer Uol",
    "email": "customer@uol.com",
    "individualTaxpayer": "348.381.291-14",
    "phone": "(11) 98755-7882",
    "status": "ACTIVE",
    "created_at": "2024-03-18T18:37:48.000Z"
  },
]
}
```

### GET /customers

A rota GET `/customers` é utilizada para obter a listagem de clientes da uol cadastrados no banco de dados.

saída _(status: 200)_:

```json
{
[
  {
    "id": 1,
    "name": "Customer Uol",
    "email": "customer@uol.com",
    "individualTaxpayer": "348.381.291-14",
    "phone": "(11) 98755-7882",
    "status": "ACTIVE",
    "created_at": "2024-03-18T18:37:48.000Z"
  },
  {
    "id": 2,
    "name": "Kirk Weaver",
    "individualTaxpayer": "674.747.512-75",
    "phone": "(14) 98595-4982",
    "email": "mepo@mailinator.com",
    "status": "WAITING_APPROVAL",
    "created_at": "2024-03-18T18:46:53.000Z"
  },
]
}
```

### GET /customers/:{id}

A rota GET `/customers/:{id}` é utilizada para obter um clientes especifico da uol cadastrado no banco de dados.

```
/customers/1
```

saída _(status: 200)_:

```json
{
[
  {
    "id": 1,
    "name": "Customer Uol",
    "email": "customer@uol.com",
    "individualTaxpayer": "348.381.291-14",
    "phone": "(11) 98755-7882",
    "status": "ACTIVE",
    "created_at": "2024-03-18T18:37:48.000Z"
  },
]
}
```

### PUT /customers:{id}

A rota PUT `/customers/:{id}` é utilizada para Atualizar informações de cliente uol existente no banco de dados.

```
/customers/1
```

saída _(status: 200)_:

```json
{
  {
    "id": 1,
    "name": "Customer Uol",
    "email": "customer@uol.com",
    "individualTaxpayer": "348.381.291-14",
    "phone": "(11) 98755-7882",
    "status": "ACTIVE",
    "created_at": "2024-03-18T18:37:48.000Z"
  },
}
```
