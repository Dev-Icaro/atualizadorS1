const bodyParser = require('body-parser');
const atualizacaoRoute = require('../routes/atualizacaoRoute');
const authenticateReq  = require('../services/auth');

module.exports = app => {
   app.use(
      bodyParser.urlencoded({ extended: true }),
      bodyParser.json(),
      authenticateReq,
      atualizacaoRoute
   );
};