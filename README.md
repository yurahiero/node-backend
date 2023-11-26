
## User & Vacation Management API

Este é um projeto de API para gerenciamento de usuários e férias, utilizando o framework Fastify em Node.js.

#Configuração do Servidor
O servidor é configurado para lidar com requisições CORS e expõe rotas para manipular informações de usuários e férias.

#Porta do Servidor:

O servidor está configurado para ouvir a porta especificada no ambiente ou na porta 3333.
Registro de Rotas:

Rotas para o início, usuários e férias são registradas.

##Rotas Disponíveis
###Início
GET /: Retorna uma mensagem indicando que a API está acessível.
Usuários
GET /api/users: Obtém todos os usuários.
GET /api/users/:id: Obtém um usuário específico por ID.
POST /api/users: Adiciona um novo usuário.
PUT /api/users/:id: Atualiza um usuário existente.
DELETE /api/users/:id: Exclui um usuário.
POST /api/login: Realiza o login do usuário.
Férias
GET /api/vacations: Obtém todas as férias.
GET /api/vacations/:id: Obtém uma férias específica por ID.
POST /api/vacations: Solicita novas férias.
PUT /api/vacations/:id: Atualiza informações de uma férias existente.
DELETE /api/vacations/:id: Cancela uma férias.
