/**
 * Autor: Filipe Firmino Lemos & Gustavo Henrique Rosa de Castro
 * Data: 20/10/2019
 * Contato: filipefirmino@gec.inatel.br & gustavohenrique@gec.inatel.br
 */

//Importando a biblioteca do Restify
const restify = require('restify');
require('./database/Connect')

//Configurando servidor
const server = restify.createServer({
    name: 'TR1-EC021'
});

//Definindo porta em que subiremos o servidor
let port = 3001;

/**
 * Utilizando o bodyParser para
 * converter o body da request em
 * um jSON
 * */
server.pre(restify.pre.sanitizePath());
server.use(restify.plugins.bodyParser());

//Definindo endpoints (ou rotas) da minha aplicação.

let memes = require("./routes/Memes")
let login = require("./routes/Login")
memes.applyRoutes(server)
login.applyRoutes(server)

//Subindo o servidor
server.listen(port, function() {
    console.log(`Servidor ${server.name} executando na porta ${port}`);
});