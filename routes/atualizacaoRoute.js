const { Router }            = require('express');
const atualizacaoController = require('../api/controllers/atualizacaoController');
const atualizacaoServices   = require('../services/atualizacaoServices');

router = Router();

router.get('/atualizacao', atualizacaoController.getAllAtualizacoes);

router.route('/atualizacao/dataExecutavel')
   .put(atualizacaoServices.putDataExe)

router.route('/atualizacao/:cnpj')
   .get(atualizacaoController.getAtualizacao)
   .delete(atualizacaoController.deletaAtualizacao)
   .post(
      atualizacaoServices.validaPostAtualizacao,
      atualizacaoController.postAtualizacao
   );

router.route('/PrecaTop/atualizacao/:cnpj')
   .get(atualizacaoController.getAtualizacaoPrecaTop);

router
   .put('/PrecaTop/atualizacao/dataExecutavel', atualizacaoController.putDataExePrecaTop);

module.exports = router;