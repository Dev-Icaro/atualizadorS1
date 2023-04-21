const dataBase = require('../models');
const dateUtils = require('/')
const configs = dataBase.config;

class configController{
   static async getConfig(req, res){
      try {
         const config = await configs.findOne({ where: { id: Number(1) }});

         return res.status(200).json(config);
      } 
      catch (error) {   
         return res.status(500).json(error.message);
      };
   };

   static async putConfig(req, res){
      try {
         /* o id sempre será 1 devido a ser uma tabela de registro unico */
         const newConfig = req.body;
         await configs.update(newConfig, { where: { id: Number(1) }});
         const createdConfig = await dataBase.config.findOne({ where: { id: Number(1) } });

         return res.status(200).json(createdConfig);
      } 
      catch (error) {
         return res.status(500).json(error.message);
      };
   };
};

module.exports = configController;