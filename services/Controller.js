/**
 * Autor: Filipe Firmino Lemos & Gustavo Henrique Rosa de Castro
 * Data: 20/10/2019
 * Contato: filipefirmino@gec.inatel.br & gustavohenrique@gec.inatel.br
 */

module.exports = {
    async index(obj, req) {
        //metodo 
        // await doRequest(true)
        //     .then(response => {
        //         console.log(`Rota index (services)! | Atributo: ${response.nome} | ${obj.id} - ${obj.name}`)
        //     })
        return 220;
    },

    async store(req, res) {
        console.log(`Rota store!`)
    },

    async meme(req, res, next) {
        console.log(`Rota meme (Services)! ${JSON.stringify(req.body)}`)

        return 200
    },

    async show(req, res) {
        console.log(`Rota show!`)
    },

    async update(req, res) {
        console.log(`Rota update!`)
    },

    async detroy(req, res) {
        console.log(`Rota detroy!`)
    }
}

function doRequest(resolver) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!resolver) {
                // rejeitá-la
                reject("Reject Promise!")
            }
            resolve({
                id: 1,
                nome: "Teste"
            });
        }, 5000);
    });
}