function adicionaZeroEsquerda(numero){
   if (numero < 10)
      return '0' + String(numero)
   else
      return numero
};

exports.adicionaZeroEsquerda = adicionaZeroEsquerda;