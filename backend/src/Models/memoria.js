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
    imagem: {
        type: String,
        required: true
    },
    like: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

module.exports = mongoose.model('memoria', memoriaSchema)