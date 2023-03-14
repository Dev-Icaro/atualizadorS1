const { Router } = require('express');

const atualizacaoController = require('../api/controllers/atualizacaoController');

router = Router();

router.route('/atualizacao/:cnpj')
   .get(atualizacaoController.getAtualizacao)
   .post(atualizacaoController.postAtualizacao)
   .delete(atualizacaoController.deletaAtualizacao)

module.exports = router;