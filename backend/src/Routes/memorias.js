const { Router } = require("express")

const { pegarMemorias, addMemoria, removerMemoria, pegarMemoria } = require('../Controllers/memorias')

const router = Router()

router.get('', pegarMemorias)

router.get('/:id', pegarMemoria)

router.post('', addMemoria)

router.delete('/:id', removerMemoria)

module.exports = router