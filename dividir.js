const mazoCompleto = [
  'A de ♥️',  '2 de ♥️',  '3 de ♥️',  '4 de ♥️',
  '5 de ♥️',  '6 de ♥️',  '7 de ♥️',  '8 de ♥️',
  '9 de ♥️',  '10 de ♥️', 'J de ♥️',  'Q de ♥️',
  'K de ♥️',  'A de ♦️',  '2 de ♦️',  '3 de ♦️',
  '4 de ♦️',  '5 de ♦️',  '6 de ♦️',  '7 de ♦️',
  '8 de ♦️',  '9 de ♦️',  '10 de ♦️', 'J de ♦️',
  'Q de ♦️',  'K de ♦️',  'A de ♣️',  '2 de ♣️',
  '3 de ♣️',  '4 de ♣️',  '5 de ♣️',  '6 de ♣️',
  '7 de ♣️',  '8 de ♣️',  '9 de ♣️',  '10 de ♣️',
  'J de ♣️',  'Q de ♣️',  'K de ♣️',  'A de ♠️',
  '2 de ♠️',  '3 de ♠️',  '4 de ♠️',  '5 de ♠️',
  '6 de ♠️',  '7 de ♠️',  '8 de ♠️',  '9 de ♠️',
  '10 de ♠️', 'J de ♠️',  'Q de ♠️',  'K de ♠️'
];

const palos = ["corazones", "diamantes", "treboles", "picas"]; // Definir los nombres de los palos
const mazoPorPalo = {}; //Crear un objeto para guardar las cartas por palo

for(let i=0; i < palos.length; i++){  //recorre primero los palos uno por uno, i= indice actual,i--sirve para recorrer los 4 palos de la baraja.(const palos)
  const nombreDelPalo = palos[i];   //Guarda en una variable temporal el nombre del palo actual.
  mazoPorPalo[nombreDelPalo] = [];   //Crea un array vacío dentro del objeto mazoPorPalo para cada palo.
                                   //Ese array se usará para guardar las 13 cartas correspondientes.         

  let pares = [];    //creamos las variables para guardar los pares o impares
  let impares = [];

  for(let j= 0; j < 13; j++ ){                          //J--representa la posición de la carta dentro del palo,
                                                      // está recorriendo cada palo (corazones, diamantes, etc.).
  mazoPorPalo[nombreDelPalo][j] = mazoCompleto[i * 13 + j]; // guardamos la posicion de cada carta por palo y 
                                                            // asi dividimos el mazo

  }
  for(let carta of mazoPorPalo[nombreDelPalo]){  //separar en pares e impares

    const valor = carta.split(' ')[0];
     let numero;

    if (valor === 'A') {
      numero = 1;
    } else if (valor === 'J') {
      numero = 11;
    } else if (valor === 'Q') {
      numero = 12;
    } else if (valor === 'K') {
      numero = 13;
    } else {
      numero = parseInt(valor);
    }

    if (numero % 2 === 0) {
      pares.push(carta);
    } else {
      impares.push(carta);
    }

  }
  console.log(`Palo: ${nombreDelPalo}`);
  console.log('Pares:', pares);
  console.log('Impares:', impares);

}
