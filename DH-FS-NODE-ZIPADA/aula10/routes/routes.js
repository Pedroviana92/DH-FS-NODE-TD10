const express = require('express')
const router = express.Router()
const ProdutoController = require('../controllers/ProdutoController')
const NomeSobrenome = require('../controllers/NomeSobrenome')

  
router.get('/produto/adicionar/:nome?/:preco?/:qntd?/:cod?', ProdutoController.getProduto)

router.get('/query/params/:nome', NomeSobrenome.saudacao)

module.exports = router

