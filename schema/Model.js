const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Memes = new Schema({
    titulo: { type: String, require: true },
    descricao: { type: String, require: true },
    ano: { type: Number, require: true },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() }
});

Memes.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
})
module.exports = mongoose.model('Memes', Memes);