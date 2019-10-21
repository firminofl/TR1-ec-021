/**
 * Autor: Filipe Firmino Lemos & Gustavo Henrique Rosa de Castro
 * Data: 20/10/2019
 * Contato: filipefirmino@gec.inatel.br & gustavohenrique@gec.inatel.br
 */

const ControllerService = require("../services/Controller")
const axios = require('axios');

module.exports = {
    async index(req, res) {
        console.log(`Rota index (controller)! ${req.userId}`)
        let status = await ControllerService.index({ id: 1, name: "Test" }, req)
        console.log(`Status: ${status}`)
        return res.send({ message: "Sucesso na requisição!" })
    },

    async store(req, res) {
        console.log(`Rota store (controller)!`)
    },

    async meme(req, res, next) {
        await validateToken(req.token)
            .then(response => {
                console.log(`Rota meme (Controller)!`)
                let status = ControllerService.meme(req)

                status.then(response => {
                    switch (response) {
                        case 200:
                            res.send({
                                success: 200
                            })
                            break;
                        case 400:
                            res.send({
                                error: 400
                            })
                            break;

                        default:
                            res.send({
                                error: 500
                            })
                            break;
                    }
                })
            })
            .catch(error => {
                res.send({
                    message: `Error to validate token.`
                })
            })
    },

    async show(req, res) {
        console.log(`Rota show (controller)!`)
    },

    async update(req, res) {
        console.log(`Rota update (controller)!`)
    },

    async detroy(req, res) {
        console.log(`Rota detroy (controller)!`)
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