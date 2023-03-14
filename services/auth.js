function authenticateReq(req, res, next){
   const secret = req.headers.secret;

   return secret == process.env.APP_SECRET ? next() : res.status(500).json('Requisição inválida');
};

module.exports = authenticateReq;