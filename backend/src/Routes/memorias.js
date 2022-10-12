const { Router } = require("express")
const memoria = require("../Models/memoria")
const memoriaSchema = require('../Models/memoria')

const router = Router()

router.get('', async (req, res) => {
    let resposta 
    try {
        resposta = await memoriaSchema.find()
    } catch(erro) {
        console.log(erro)
    }

    if(resposta) {
        res.status(200).json(resposta)
    } else {
        res.status(400).json({'erro': 'Erro ao pegar memórias'})
    }
})

router.post('', async (req, res) => {
    let resposta
    try {
        resposta = await memoriaSchema.create(req.body)
    } catch(erro) {
        console.log(erro)
    }

    if(resposta) {
        res.status(200).json(resposta)
    } else {
        res.status(400).json({'erro': 'Erro ao adcionar sua memória'})
    }
})


module.exports = router