const mongoose = require('mongoose')
const { Schema } = mongoose

const memoriaSchema  = new Schema({
    criador: {
        type: String,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    texto: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true
    },
    /*imagem: {
    }*/
}, { timestamps: true })

module.exports = mongoose.model('memoria', memoriaSchema)