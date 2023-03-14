const express = require('express');
const routes = require('./routes');
require('dotenv').config();

const app = express();
process.setMaxListeners(0);

routes(app);

app.listen(process.env.PORT, () => {
   console.log(`servidor rodando na porta ${process.env.PORT}`);
});

module.exports = app;

