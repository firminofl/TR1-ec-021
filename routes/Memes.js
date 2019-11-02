/**
 * Autor: Filipe Firmino Lemos & Gustavo Henrique Rosa de Castro
 * Data: 20/10/2019
 * Contato: filipefirmino@gec.inatel.br & gustavohenrique@gec.inatel.br
 */

const Router = require('restify-router').Router;
const routes = new Router();
const axios = require('axios');

const Controller = require('../controllers/Controller.js');

routes.use(verifyToken)

routes.post('/meme', Controller.store);

routes.get('/meme', Controller.showAll);

routes.get('/meme/:id', Controller.showOne);

routes.del('/meme', Controller.detroy);

routes.patch('/meme/:id', Controller.update);


//Verify Token
async function verifyToken(req, res, next) {
    //Get auth header value
    const tokenHeader = req.headers['token']

    //Check if authHeader is undefined
    if (typeof tokenHeader !== 'undefined') {
        //Set the token
        //req.token = tokenHeader
        try {
            await validateToken(tokenHeader);
            //Next middleware
            next()

        } catch (error) {
            res.send(401)
        }
    } else {
        console.log(`Forbidden`)
            //Forbidden
        res.send(403)
    }
}


function validateToken(token) {
    return new Promise((resolve, reject) => {
        //URL for to validate token
        const url = `https://ec021-2019-2-av2-auth.herokuapp.com/auth/validateToken`

        let data = {};
        let config = {
            headers: {
                token
            }
        };

        axios.post(url, data, config)
            .then((response) => {
                //Set the data to return
                resolve();
            })
            .catch((error) => {
                reject()
            });
    });
}

module.exports = routes;