function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:

  if (num<1000 && num>99 || num>-1000 && num<-99) console.log('true');
  else console.log('false');
  };

tieneTresDigitos(345);
tieneTresDigitos(1345);
tieneTresDigitos(-345);
tieneTresDigitos(-9345);




module.exports = tieneTresDigitos;
