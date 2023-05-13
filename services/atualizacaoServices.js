const dataBase         = require('../api/models');
const dateUtils        = require('../utils/dateUtils');
const atualizacaoUtils = require('../utils/atualizacaoUtils');
const atualizacaoConstants = require('../constants/atualizacaoConstants')
const configModel      = dataBase.config;
const atualizacaoModel = dataBase.atualizacoes;


async function getDataExe(){
   try {
      const config = await configModel.findOne({ where: { id: Number(1) }});
      const dataExe = dateUtils.formatoTimeStampBR(config.dataExe);
      console.log(`Enviando data do executável: ${dataExe}`);

      return dataExe;
   } 
   catch (error) {
      throw error;
   };
};

async function putDataExe(req, res){
   try {
      const newDataExe = req.body;

      await configModel.update(newDataExe, { where: { id: Number(1) }});
      const config = await configModel.findOne({ where: { id: Number(1) }});
      const dataExe = dateUtils.formatoTimeStampBR(config.dataExe);
      console.log(`Data do executável atualizada: ${dataExe}`);

      return res.status(200).json({ dataExe });
   } 
   catch (error) {
      return res.status(500).json(error.message);
   };
};

async function validaPostAtualizacao(req, res, next){
   try {
      const { cnpj } = req.params;
      
      return await atualizacaoModel.count({ where: { cnpj: String(cnpj) }}) > 0 ? 
         res.status(200).json({message: "cnpj já marcado para atualizar"})
         :
         next();
   } 
   catch (error) {
      return res.status(500).json(error.message);
   };
};

async function getPTStatusOfCnpj(cnpj) {
   if (await atualizacaoUtils.cnpjIsInAtualizacoes(cnpj)) {
      const dataExe = await atualizacaoUtils.getDataExePrecaTop();

      return { atualizar: true, dataExe: dataExe };
   } 
   else {
      return { atualizar: false };
   };
};

async function updateDataExePT(newDataExe) {
   await configModel.update(newDataExe, { where: { id: Number(1) } });

   return atualizacaoConstants.dataExePrecaTopSuccess;
}

exports.putDataExe            = putDataExe;
exports.getDataExe            = getDataExe;
exports.validaPostAtualizacao = validaPostAtualizacao;
exports.getPTStatusByCnpj     = getPTStatusOfCnpj
exports.updateDataExePT       = updateDataExePT;