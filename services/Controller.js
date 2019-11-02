/**
 * Autor: Filipe Firmino Lemos & Gustavo Henrique Rosa de Castro
 * Data: 20/10/2019
 * Contato: filipefirmino@gec.inatel.br & gustavohenrique@gec.inatel.br
 */
const MemesModel = require('../schema/Model');

async function store({ titulo, descricao, ano }) {
    console.log(`Rota store (Services)!`)

    let meme = {
        titulo,
        descricao,
        ano
    }
    return MemesModel.create(meme)
}

async function showAll() {
    console.log(`Rota show!`)

    return MemesModel.find().lean()
}

async function showOne({ id }) {
    console.log(`Rota showOne! ${id}`);
    //console.log(Memes.findById(id).lean())
    return MemesModel.findById(id).lean()
}

async function detroy({ id }) {
    console.log(`Rota detroy! ${id}`);
    //console.log(Memes.findById(id).lean())
    return MemesModel.deleteOne({ _id: id })
}

async function update({ id, titulo, descricao, ano }) {
    console.log(`Rota update! ${id}`);
    //console.log(Memes.findById(id).lean())

    let fieldsToSet = {};
    if (titulo) fieldsToSet.titulo = titulo
    if (descricao) fieldsToSet.descricao = descricao
    if (ano) fieldsToSet.ano = ano
    fieldsToSet.updatedAt = Date.now();

    return MemesModel.findOneAndUpdate({
        _id: id,
    }, {
        $set: fieldsToSet
    }, {
        new: true
    });
}

module.exports = {
    store,
    showAll,
    showOne,
    detroy,
    update
}