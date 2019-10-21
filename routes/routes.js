/**
 * Autor: Filipe Firmino Lemos & Gustavo Henrique Rosa de Castro
 * Data: 20/10/2019
 * Contato: filipefirmino@gec.inatel.br & gustavohenrique@gec.inatel.br
 */

const Router = require('restify-router').Router;
const routerInstance = new Router();
const jwt = require('jsonwebtoken')
const apiPoint = `/api`
const axios = require('axios');

const Controller = require('../controllers/Controller.js');

routerInstance.get('/show', Controller.index);

routerInstance.get('/show/:id', Controller.show);

routerInstance.post('/store', Controller.store);

routerInstance.post('/meme', verifyToken, Controller.meme);

routerInstance.put('/update/:id', Controller.update);

routerInstance.del('/delete/:id', Controller.detroy);

routerInstance.post(`/auth/login`, (req, res) => {
    //URL for to make login
    const url = `https://ec021-2019-2-av2-auth.herokuapp.com/auth/login`

    //Obtain the parameter of username and password
    let { username, password } = req.body;

    let data = {
        username,
        password
    }

    let config = {
        headers: {},
    };

    axios.post(url, data, config)
        .then((response) => {
            //Set the token
            let token = response.data.token
            res.json({
                token
            });
        })
        .catch((error) => {
            res.json(error.response.data);
        });
});

//Verify Token
function verifyToken(req, res, next) {
    //Get auth header value
    const tokenHeader = req.headers['token']

    //Check if authHeader is undefined
    if (typeof tokenHeader !== 'undefined') {
        //Set the token
        req.token = tokenHeader
        
        //Next middleware
        next()
    } else {
        console.log(`Forbidden`)
        //Forbidden
        res.send(403)
    }
}

module.exports = routerInstance;