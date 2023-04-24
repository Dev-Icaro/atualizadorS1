const sysUtils = require('../utils/sysUtils');

function formatoTimeStampBR(timeStamp){
   return formatDateTime('DD/MM/YYYY hh:mm:ss', timeStamp);
};

function formatDateTime(format, dateTime){
   // Dia 
   const dia = new RegExp('DD', 'i');
   dataFormatada = format.replace(dia, sysUtils.adicionaZeroEsquerda(dateTime.getDate()));

   // Mês (Maiúsculo)
   const mes = new RegExp('MM');
   dataFormatada = dataFormatada.replace(mes, sysUtils.adicionaZeroEsquerda((dateTime.getMonth() + 1)));

   // Ano
   const ano = new RegExp('YYYY', 'i');
   dataFormatada = dataFormatada.replace(ano, dateTime.getFullYear());

   // Hora 
   const hora = new RegExp('hh', 'i');
   dataFormatada = dataFormatada.replace(hora, sysUtils.adicionaZeroEsquerda(dateTime.getHours()));

   // Minutos (Minúsculo)
   const minutos = new RegExp('mm');
   dataFormatada = dataFormatada.replace(minutos, sysUtils.adicionaZeroEsquerda(dateTime.getMinutes()));

   // Segundos
   const segundos = new RegExp('ss', 'i');
   dataFormatada = dataFormatada.replace(segundos, sysUtils.adicionaZeroEsquerda(dateTime.getSeconds()));

   return dataFormatada;
}

exports.formatoTimeStampBR = formatoTimeStampBR;