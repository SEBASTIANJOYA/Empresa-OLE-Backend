const mongoose = require('mongoose')

//const uri='mongodb+srv://electiva123:1234%cluster0.fiuuw.mongodb.net/DataMana?retryWrites=true&w=majority'
const uri = 'mongodb+srv://electiva123:1234@cluster0.fiuuw.mongodb.net/prueba123?retryWrites=true&w=majority'
mongoose.connect(uri)
.then(() => console.log("BASES DE DATOS CONECTADA"))
.catch(err => console.error(err))