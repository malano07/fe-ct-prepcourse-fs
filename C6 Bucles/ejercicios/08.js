function esPositivoOInferiorA10(a) {
   // La función recibe un número "a" por parámetro.
   // Retorna true si es positivo y menor que 10.
   // Retorna false en caso contrario.
   // Tu código:

   if (a>0 && a<10) console.log('true')
      else console.log('false')
};

esPositivoOInferiorA10(2);
esPositivoOInferiorA10(11);
esPositivoOInferiorA10(-2);

module.exports = esPositivoOInferiorA10;
