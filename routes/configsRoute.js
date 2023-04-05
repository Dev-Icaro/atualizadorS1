const { Router }       = require('express');
const configController = require('../api/controllers/configController');

const router = Router();

router.route('/config')
   .get(configController.getConfig)
   .put(configController.putConfig)

module.exports = router;