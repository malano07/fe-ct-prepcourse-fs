function mayoriaDeEdad(edad) {
  // Determinar si la persona puede ingresar al evento según su edad.
  // Si tiene 18 años o más, retorna el string: "Allowed".
  // Caso contrario: "Not allowed".
  // Tu código:

  if(edad==18 || edad>18) console.log('allowed');
  else console.log('not allowed');
}

mayoriaDeEdad(17);
mayoriaDeEdad(18);
mayoriaDeEdad(19);

module.exports = mayoriaDeEdad;
