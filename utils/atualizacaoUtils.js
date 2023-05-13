const dataBase = require('../api/models');
const configModel = dataBase.config;
const atualizacaoModel = dataBase.atualizacoes;
const dateUtils = require('../utils/dateUtils');

async function cnpjIsInAtualizacoes(cnpj) {
   const result = await atualizacaoModel.findOne({
       where: { 
         cnpj: String(cnpj) 
      }
   });
   return result !== null;
};

async function getDataExePrecaTop() {
   const config = await configModel.findOne({ where: { id: Number(1) }});
   return dateUtils.formatoTimeStampBR(config.dataExePrecaTop);
}

exports.cnpjIsInAtualizacoes = cnpjIsInAtualizacoes;
exports.getDataExePrecaTop = getDataExePrecaTop;