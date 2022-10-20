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
        type: String
    },
    tags: {
        type: String
    },
    imagem: {
        type: String
    },
    like: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

module.exports = mongoose.model('memoria', memoriaSchema)