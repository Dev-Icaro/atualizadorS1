const bodyParser       = require('body-parser');
const atualizacaoRoute = require('../routes/atualizacaoRoute');
const configRoute      = require('../routes/configsRoute');
const authenticateReq  = require('../services/auth');

module.exports = app => {
   app.use(
      bodyParser.urlencoded({ extended: true }),
      bodyParser.json(),
      authenticateReq,
      configRoute,
      atualizacaoRoute
   );
};