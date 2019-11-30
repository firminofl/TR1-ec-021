/**
 * Autor: Filipe Firmino Lemos & Gustavo Henrique Rosa de Castro
 * Data: 20/10/2019
 * Contato: filipefirmino@gec.inatel.br & gustavohenrique@gec.inatel.br
 */

//Importando o SCHEMA do moogose
const MemesModel = require('../schema/Model');

//Metodo para trabalhar o armazenamento do meme
async function store({ titulo, descricao, ano }) {
    let meme = {
        titulo,
        descricao,
        ano
    }

    //Criação do meme na coleção especificada no projeto
    return MemesModel.create(meme)
}

async function showAll() {
    //Mostrar todos os memes na coleção especificada no projeto
    //Metodo LEAN() é para evitar alguns parametros retornados depois de aberto a conexão, para diminuir o consumo de banda
    return MemesModel.find().lean()
}

async function showOne({ id }) {
    //Mostrar um meme na coleção com base em seu id
    //Metodo LEAN() é para evitar alguns parametros retornados depois de aberto a conexão, para diminuir o consumo de banda
    return MemesModel.findById(id).lean()
}

async function detroy({ id }) {
    //Deletar um meme com base em seu id
    return MemesModel.deleteOne({ _id: id })
}

async function update({ id, titulo, descricao, ano }) {
    //Atualizar os memes com base em seus parametros e atualizar somente as informações necessarias, sem a necessidade de trocar o que já é igual
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

//Exportação dos metodos acima
module.exports = {
    store,
    showAll,
    showOne,
    detroy,
    update
}