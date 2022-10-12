const memoriaModel = require('../Models/memoria')
//const multer = require('multer')

const pegarMemorias = async (req, res) => {
    let resposta 
    try {
        resposta = await memoriaModel.find()
    } catch(erro) {
        console.log(erro)
    }

    if(resposta) {
        res.status(200).json(resposta)
    } else {
        res.status(400).json({'erro': 'Erro ao pegar memórias'})
    }
}

const pegarMemoria = async (req, res) => {
    let resposta 
    try {
        resposta = await memoriaModel.findById( req.params.id )
    } catch(erro) {
        console.log(erro)
    }

    if(resposta) {
        res.status(200).json(resposta)
    } else {
        res.status(400).json({'erro': 'Erro ao pegar memórias'})
    }
}

const addMemoria = async (req, res) => {
    let resposta
    try {
        resposta = await memoriaModel.create(req.body)
    } catch(erro) {
        console.log(erro)
    }

    if(resposta) {
        res.status(200).json(resposta)
    } else {
        res.status(400).json({'erro': 'Erro ao adcionar sua memória'})
    }
}

const removerMemoria = async (req, res) => {

    let resposta
    try {
        resposta = await memoriaModel.findByIdAndDelete( req.params.id )
    } catch(erro) {
        console.log(erro)
    }

    if(resposta) {
        res.status(200).json(resposta)
    } else {
        res.status(400).json({'erro': 'Erro ao adcionar sua memória'})
    }
}

module.exports = {
    pegarMemorias,
    addMemoria,
    removerMemoria,
    pegarMemoria
}