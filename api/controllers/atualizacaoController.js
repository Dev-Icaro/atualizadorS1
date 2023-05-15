const { getDataExe } = require('../../services/atualizacaoServices');
const atualizacaoService = require('../../services/atualizacaoServices');
const dataBase = require('../models');

class atualizacaoController {

   static async getAllAtualizacoes(req, res){
      try {
         const atualizacoes = await dataBase.atualizacoes.findAll();

         return res.status(200).json(atualizacoes);
      } 
      catch (error) {
         return res.status(500).json(error.message);
      };
   };

   static async getAtualizacao(req, res) {
      try {
         const { cnpj } = req.params;

         const count = await dataBase.atualizacoes.count({
            where: {
               cnpj: String(cnpj)
            }
         });
         const dataExe = await getDataExe();
         return count > 0 ? res.status(200).json({ atualizar: true, dataExe }) : res.status(200).json({ atualizar: false });
      }
      catch(error){
         return res.status(500).json(error.message);
      };
   };

   static async postAtualizacao(req, res){
      try {
         const { cnpj } = req.params;
         const atualizacaoCriada =  await dataBase.atualizacoes.create({ cnpj });

         return res.status(200).json(atualizacaoCriada);
      } 
      catch (error) {
         return res.status(500).json(error.message);
      };
   };

   static async deletaAtualizacao(req, res){
      try {
         const { cnpj } = req.params;
         await dataBase.atualizacoes.destroy({ where: { cnpj: String(cnpj) }})

         return res.status(200).json({ mensagem: `Atualização da empresa com CNPJ: ${cnpj} deletada com sucesso`});
      }
      catch (error) {
         return res.status(500).json(error.message);
      };
   };

   static async getAtualizacaoPrecaTop(req, res) {
      try {
         const { cnpj } = req.params;
         const serviceResponse = await atualizacaoService.getPTStatusByCnpj(cnpj);

         return res.status(200).json(serviceResponse);
      } 
      catch (error) {
         console.log(error.message);
         return res.status(500).json(error.message);
      };
   };

   static async putDataExePrecaTop(req, res) {
      try {
         const serviceResponse = await atualizacaoService.updateDataExePT(req.body);
         
         return res.status(200).json(serviceResponse);
      } 
      catch (error) {
         console.log(error.message);
         return res.status(500).json(error.message);
      }
   }
};

module.exports = atualizacaoController;