const sysUtils = require('../utils/sysUtils');

function formatoTimeStampBR(timeStampExterior){
   const timeStamp = new Date(timeStampExterior);
   const dia = sysUtils.adicionaZeroEsquerda(timeStamp.getDate());
   const mes = sysUtils.adicionaZeroEsquerda((timeStamp.getMonth() + 1));
   const ano = timeStamp.getFullYear();
   const horas = sysUtils.adicionaZeroEsquerda(timeStamp.getHours());
   const minutos = sysUtils.adicionaZeroEsquerda(timeStamp.getMinutes());
   const segundos = sysUtils.adicionaZeroEsquerda(timeStamp.getSeconds());

   return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
};

function formatDateTime(format, dateTime){
   dateTime = new Date(dateTime);

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