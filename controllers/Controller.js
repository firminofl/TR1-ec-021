/**
 * Autor: Filipe Firmino Lemos & Gustavo Henrique Rosa de Castro
 * Data: 20/10/2019
 * Contato: filipefirmino@gec.inatel.br & gustavohenrique@gec.inatel.br
 */

const ControllerService = require("../services/Controller")
const axios = require('axios');

async function store(req, res, next) {
    //Descontruindo os parametros passados na requisição
    const { titulo, descricao, ano } = req.body;

    if (!titulo || !descricao || !ano) return res.send(400);

    //Chamada do método store() na classe de serviço para ter acesso ao banco de dados
    let meme = await ControllerService.store({ titulo, descricao, ano })

    //Meme criado e é enviado ao front-end o sucesso da requisiçao
    res.send(201, meme)
}

async function showAll(req, res) {
    //Chamada do método showAll() na classe de serviço para ter acesso ao banco de dados e buscar todos os memes na coleção
    let meme = await ControllerService.showAll()

    //Código 200, sucesso na operação
    res.send(200, meme)
}

async function showOne(req, res) {
    //Descontruindo os parametros passados na requisição
    const { id } = req.params

    //Chamada do método showOne() na classe de serviço para ter acesso ao banco de dados e buscar somente um meme na coleção
    let meme = await ControllerService.showOne({ id })

    //Código 200, sucesso na operação
    res.send(200, meme)
}

async function detroy(req, res) {
    //Descontruindo os parametros passados na requisição
    const { id } = req.body

    //Chamada do método detroy() na classe de serviço para ter acesso ao banco de dados e deletar o meme na coleção
    await ControllerService.detroy({ id })

    //Código 204, sucesso na operação de exclusão
    res.send(204)
}

async function update(req, res) {
    //Descontruindo os parametros passados na requisição
    const { id } = req.params
    const { titulo, descricao, ano } = req.body;

    //Verifica se os campos não vieram vazios
    if (!titulo && !descricao && !ano) return res.send(400);

    //Chamada do método update() na classe de serviço para ter acesso ao banco de dados e atualizar um meme na coleção
    let meme = await ControllerService.update({ id, titulo, descricao, ano })

    //Código 200, sucesso na operação
    res.send(200, meme)
}

//Exportação do métodos que compõe o arquivo
module.exports = {
    store,
    showAll,
    showOne,
    detroy,
    update
}