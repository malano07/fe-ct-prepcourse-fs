function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:

  if (x<y || x==y) console.log(y);
  else console.log(x);
};

obtenerMayor(3,9);
obtenerMayor(4,4);
obtenerMayor(6,3);

module.exports = obtenerMayor;
