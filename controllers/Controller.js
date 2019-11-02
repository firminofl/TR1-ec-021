/**
 * Autor: Filipe Firmino Lemos & Gustavo Henrique Rosa de Castro
 * Data: 20/10/2019
 * Contato: filipefirmino@gec.inatel.br & gustavohenrique@gec.inatel.br
 */

const ControllerService = require("../services/Controller")
const axios = require('axios');

async function store(req, res, next) {
    console.log(`Rota Store (controller)!`)

    const { titulo, descricao, ano } = req.body;

    if (!titulo || !descricao || !ano) return res.send(400);

    let meme = await ControllerService.store({ titulo, descricao, ano })
    res.send(201, meme)
}

async function showAll(req, res) {
    console.log(`Rota show (controller)!`)
    let meme = await ControllerService.showAll()
    res.send(200, meme)
}

async function showOne(req, res) {
    console.log(`Rota showOne (controller)!`)

    const { id } = req.params
    let meme = await ControllerService.showOne({ id })
    res.send(200, meme)
}

async function detroy(req, res) {
    console.log(`Rota delete (controller)!`)

    const { id } = req.body
    await ControllerService.detroy({ id })
    res.send(204)
}

async function update(req, res) {
    console.log(`Rota update (controller)!`)

    const { id } = req.params
    const { titulo, descricao, ano } = req.body;
    if (!titulo && !descricao && !ano) return res.send(400);

    let meme = await ControllerService.update({ id, titulo, descricao, ano })
    res.send(200, meme)
}

module.exports = {
    store,
    showAll,
    showOne,
    detroy,
    update
}