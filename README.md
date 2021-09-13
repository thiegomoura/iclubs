## Getting Started

First, install the dependecies:

```bash
yarn
```

Create at root folder the `.env` file with database and encription config, follow the `.env.example` on root folder.

### Create database

Run migration for create the database structure

```bash
# run migrations
$ yarn typeorm migration:run
```
### Run server
Run the dev server
```bash
$ yarn dev
```

### Routes

Import `insomnia-routes.json` in insomnia app.

| Método | Rota | Função | Campos obrigatórios | Descrição |
|--|--|--|--|--|
| POST | /users | Cadastra um usuário | name, email, password | Antes de cadastrar um usuário é verificado se o e-mail informado já foi cadastrado. |
| GET | /users/auth | Gera um token de acesso na apliação | email e password | Verifica se usuário existe e se a senha confere com a salva no banco. |
| GET | /cards | Retorna todos os cards |  |  |
| POST | /cards | Cria um novo card | title, content |  |
| PUT | /cards/:id | Altera titulo e contudo de um card | title, content | Necessário informar token no cabeçalho. |
| PATCH | /cards/:id/done | Define um card como atendido | | Necessário informar token no cabeçalho. |
| DEL | /cards/:id | Exclui um card | | Necessário informar token no cabeçalho. |
---

Made with ☕ and 🤯 by [Thiego Moura](https://thiegomoura.github.io/me/)
