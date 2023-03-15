const express = require('express');
const routes = require('./routes');
const cors = require('cors');

var http = require('http');

require('dotenv').config();

const app = express();

app.use(cors());
process.setMaxListeners(0);

routes(app);

process.on('uncaughtException', function (err) {
   console.log(err);
}); 

app.listen(process.env.PORT, () => {
   console.log(`servidor rodando na porta ${process.env.PORT}`);
});

module.exports = app;

