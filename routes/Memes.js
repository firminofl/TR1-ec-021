/**
 * Autor: Filipe Firmino Lemos & Gustavo Henrique Rosa de Castro
 * Data: 20/10/2019
 * Contato: filipefirmino@gec.inatel.br & gustavohenrique@gec.inatel.br
 */

const Router = require('restify-router').Router;
const routes = new Router();
const axios = require('axios');

//Importando o arquivo de controler do servidor para tratar os dados que virão das requisições
const Controller = require('../controllers/Controller.js');

//Middleware para verificar se o login está ok e o token é válido
routes.use(verifyToken)

//Rota meme para cadastro
routes.post('/meme', Controller.store);

//Rota para obter os memes cadastrados
routes.get('/meme', Controller.showAll);

//Rota meme para mostrar um meme especifico, passado pelo id
routes.get('/meme/:id', Controller.showOne);

//Rota meme para excluir da coleção
routes.del('/meme', Controller.detroy);

//Rota meme para alterar seus atributos na coleção
routes.patch('/meme/:id', Controller.update);


//Função de verificação de token
async function verifyToken(req, res, next) {
    //Obtendo o header da requisição
    const tokenHeader = req.headers['token']

    //Verificar se o cabeçalho não veio indefinido
    if (typeof tokenHeader !== 'undefined') {
        //Setar o token
        try {
            //Validar o token no método validateToken()
            await validateToken(tokenHeader);

            //Próximo middleware
            next()

        } catch (error) {
            //Não foi autorizado
            res.send(401)
        }
    } else {
        //Ausencia do token
        res.send(403)
    }
}


function validateToken(token) {
    return new Promise((resolve, reject) => {
        //URL para validar o token no servidor de autenticação
        const url = `https://ec021-2019-2-av2-auth.herokuapp.com/auth/validateToken`

        //Montando o body da requisição
        let data = {};

        //Montando o header que irá na requisição, sendo passado o token informado pelo usuário no momento da requisição
        let config = {
            headers: {
                token
            }
        };

        //Aberta de uma requisição HTTP via Axios passando os dados anteriormente formados para o servidor de autenticação/login
        axios.post(url, data, config)
            .then((response) => {
                //Resolvendo a promise (houve sucesso no processo)
                resolve();
            })
            .catch((error) => {
                //Rejeitando a promise (houve erro no processo)
                reject()
            });
    });
}

module.exports = routes;