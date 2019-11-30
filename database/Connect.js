const mongoose = require('mongoose');

//URL de conexão com o mongoDB Atlas
const DB_URL = 'mongodb+srv://adauto:adauto@cluster0-rven8.mongodb.net/test?retryWrites=true&w=majority'

//Configurando os parametros necessários para iniciar a conexão
const DB_SETTINGS = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    dbName: 'ec021-av2-core'
}

//Inicio da conexão, passando os parametros mencionados anteriormente
mongoose.connect(DB_URL, DB_SETTINGS, (err) => {
    if (err) {
        console.log(`Erro ao conectar no MongoDB Atlas`);
        console.log(err.message)
    } else {
        console.log(`Servidor conectado ao MongoDB Atlas.`)
    }
});