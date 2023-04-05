const { Router }            = require('express');
const atualizacaoController = require('../api/controllers/atualizacaoController');
const atualizacaoServices   = require('../services/atualizacaoServices');

router = Router();

router.get('/atualizacao', 
   atualizacaoController.getAllAtualizacoes
);

router.route('/atualizacao/dataExecutavel')
   .get(
      atualizacaoServices.getDataExe
   )
   .put(
      atualizacaoServices.putDataExe
   )

router.route('/atualizacao/:cnpj')
   .get(
      atualizacaoController.getAtualizacao
   )
   .post(
      atualizacaoServices.validaPostAtualizacao,
      atualizacaoController.postAtualizacao
   )
   .delete(
      atualizacaoController.deletaAtualizacao
   )

module.exports = router;