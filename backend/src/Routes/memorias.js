const { Router } = require("express")

const { pegarMemorias, addMemoria, removerMemoria, pegarMemoria, editarMemoria } = require('../Controllers/memorias')

const router = Router()

router.get('', pegarMemorias)

router.get('/:id', pegarMemoria)

router.post('', addMemoria)

router.delete('/:id', removerMemoria)

router.put('/:id', editarMemoria)

module.exports = router