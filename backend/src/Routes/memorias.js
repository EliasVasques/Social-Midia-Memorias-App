const { Router } = require("express")
const multer = require('multer')
const memoriaModel = require('../Models/memoria')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads/")
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
const upload = multer({ storage: storage })

const { pegarMemorias, addMemoria, removerMemoria, pegarMemoria, editarMemoria } = require('../Controllers/memorias')

const router = Router()

router.get('', pegarMemorias)

router.get('/:id', pegarMemoria)

router.post('',  upload.single('imagem'), async (req, res) => {
    console.log(req.file);

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
})

router.delete('/:id', removerMemoria)

router.put('/:id', editarMemoria)

module.exports = router