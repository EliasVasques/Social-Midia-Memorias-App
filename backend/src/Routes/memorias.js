const { Router } = require("express")

const { pegarMemorias, addMemoria, removerMemoria } = require('../Controllers/memorias')

const router = Router()

router.get('',pegarMemorias)

router.post('', addMemoria)

router.delete('/:id', removerMemoria)

module.exports = router