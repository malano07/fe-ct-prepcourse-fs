function esTipoDato(valor) {
  // La función recibe un argumento llamado valor.
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código: 
  
    
    if (valor===true) { 
      console.log('boolean');
    }
    else if (valor===9){
         console.log('number');
      }
      else if (valor==='9'){
        console.log('string');
     }
    
  };
  
  esTipoDato('9');


module.exports = esTipoDato;