function esIgualYNegativo(a, b) {
  // La función recibe dos argumentos "a" y "b" que son números.
  // Determina si son iguales y son ambos negativos.
  // De ser así, retorna true, de lo contrario, retorna false.
  // Tu código:
  if (a==b && a<0) console.log('true')
    else console.log('false');
};

esIgualYNegativo(-3,-3);
esIgualYNegativo(5,4);
esIgualYNegativo(-3,1);

module.exports = esIgualYNegativo;
