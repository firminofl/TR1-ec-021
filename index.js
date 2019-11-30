/**
 * Autor: Filipe Firmino Lemos & Gustavo Henrique Rosa de Castro
 * Data: 20/10/2019
 * Contato: filipefirmino@gec.inatel.br & gustavohenrique@gec.inatel.br
 */

//Importando a biblioteca do Restify
const restify = require('restify');

//Abrindo conexão com o banco de dados (MongoDB Atlas)
require('./database/Connect')

//Criando o servidor e dando um nome ao mesmo
const server = restify.createServer({
    name: 'TR1-EC021'
});

//Definindo porta em que o servidor irá utilizar
let port = 3001;

/**
 * Utilizando o bodyParser para
 * converter o body da request em
 * um jSON
 * */
server.use(restify.plugins.bodyParser());

//Ignora na URL se faltar a barra (/) após a porta e no id conforme a query formada (/:id) caso não tenha enviado um id ou seja de uma rota do tipo GET
server.pre(restify.pre.sanitizePath());

//Definindo endpoints (ou rotas) da aplicação. Arquivos para melhorar a visibilidade das rotas e fácil manutenção.
let memes = require("./routes/Memes")
let login = require("./routes/Login")

//Aplicando a importação das rotas para utiliza-las
memes.applyRoutes(server)
login.applyRoutes(server)

//Subindo o servidor
server.listen(port, function() {
    console.log(`Servidor ${server.name} executando na porta ${port}`);
});