const sysUtils = require('../utils/sysUtils');

function formatoTimeStampBR(timeStampExterior){
   // formato DD/MM/YYYY hh:mm:ss
   const timeStamp = new Date(timeStampExterior);
   const dia = sysUtils.adicionaZeroEsquerda(timeStamp.getDate());
   const mes = sysUtils.adicionaZeroEsquerda((timeStamp.getMonth() + 1));
   const ano = timeStamp.getFullYear();
   const horas = sysUtils.adicionaZeroEsquerda(timeStamp.getHours());
   const minutos = sysUtils.adicionaZeroEsquerda(timeStamp.getMinutes());
   const segundos = sysUtils.adicionaZeroEsquerda(timeStamp.getSeconds());

   return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
};

exports.formatoTimeStampBR = formatoTimeStampBR;