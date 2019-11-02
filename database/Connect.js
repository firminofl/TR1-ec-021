const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/memes';
const DB_SETTINGS = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    dbName: 'ec021-av2-core'
}

mongoose.connect(DB_URL, DB_SETTINGS, (err) => {
    if (err) {
        console.log(`Erro ao conectar no MongoDB Atlas`);
        console.log(err.message)
    } else {
        console.log(`Servidor conectado ao MongoDB Atlas.`)
    }
});