const Router = require('restify-router').Router;
const routes = new Router();
const axios = require('axios');

routes.post(`/auth/login`, (req, res) => {
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

module.exports = routes