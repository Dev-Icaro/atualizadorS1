const bodyParser = require('body-parser');
const atualizacaoRoute = require('../routes/atualizacaoRoute');
const authenticateReq  = require('../services/auth');

module.exports = app => {
   app.use(
      bodyParser.json(),
      authenticateReq,
      atualizacaoRoute
   );
};