const Router = require('restify-router').Router;
const routes = new Router();
const axios = require('axios');

routes.post(`/auth/login`, (req, res) => {
    //URL para acessar o servidor de autenticação
    const url = `https://ec021-2019-2-av2-auth.herokuapp.com/auth/login`

    //Obtendo por meio da desconstrução os parametros de usuario e senha na requisição de login
    let { username, password } = req.body;

    //Montando o arquivo JSON que será enviado no body da requisição para validação no servidor de autenticação
    let data = {
        username,
        password
    }

    //Configurando os cabeçalhos
    let config = {
        headers: {},
    };

    //Aberta de uma requisição HTTP via Axios passando os dados anteriormente formados para o servidor de autenticação/login
    axios.post(url, data, config)
        .then((response) => {
            //Resposta obtida pela servidor, caso tenha tido sucesso
            let { data } = response

            //Enviando a resposta ao "front-end (HTTP CLIENT)"
            res.json({
                data
            });
        })
        .catch((error) => {
            //Enviando a resposta ao "front-end (HTTP CLIENT)"
            res.json(error.response.data);
        });
});

//Exportação do módulo
module.exports = routes