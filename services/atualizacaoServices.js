const dataBase         = require('../api/models');
const configModel      = dataBase.config;
const atualizacaoModel = dataBase.atualizacoes;

async function getDataExe(){
   try {
      const config = await configModel.findOne({ where: { id: Number(1) }})
      const dataExe = new Date(config.dataExe).toLocaleString('pt-BR');

      return dataExe;
   } 
   catch (error) {
      return res.status(500).json(error.message);
   };
};

async function putDataExe(req, res){
   try {
      const newDataExe = req.body;

      await configModel.update(newDataExe, { where: { id: Number(1) }});
      const config = await configModel.findOne({ where: { id: Number(1) }});
      const dataExe = new Date(config.dataExe).toLocaleString('pt-BR');

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

exports.putDataExe            = putDataExe;
exports.getDataExe            = getDataExe;
exports.validaPostAtualizacao = validaPostAtualizacao;