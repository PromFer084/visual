/*let saldo = 1000;

console.log(saldo)
/*saldo += 500; // Equivale a saldo = saldo + 500
saldo -= 200; // Equivale a saldo = saldo - 200
saldo *= 2;   // Equivale a saldo = saldo * 2
saldo /= 4;   // Equivale a saldo = saldo / 4
saldo %= 3;   // Equivale a saldo = saldo % 3*/

/*const personas = [
  {
    nombre: "Vicky",
    edad: 30,
  },
  {
    nombre: "Fede",
    edad: 25,
  },
];

// resultado debe ser true o false
const resultado = personas[0].edad > personas[1].edad

console.log(`${personas[0].nombre} es mayor a ${personas[1].nombre}?`, resultado);*/

// Estado de cuenta
/*const estadoDeCuenta = {
  saldoDisponible: 500
};

// Producto deseado
const producto = {
  nombre: "Teclado Mecánico",
  precio: 300
};

// esto deberías ser un boolean
const saldoSuficiente = estadoDeCuenta.saldoDisponible > producto.precio;
  
console.log("Saldo suficiente", saldoSuficiente);*/
////////

// Valores iniciales

const base = 9;
let multiplicador = 3;
const texto = "JavaScript";
const booleano = true;
const modulo = 5;
let acumulador = 5;

// ------------------------------------
// Operaciones

const suma = base + multiplicador;
// Predicción: suma va a ser 12 

const resta = base + suma - acumulador;
// Predicción:
// resta va a ser 16 (base es 9 + suma que es 12 - acumulador (5) )

// De acá en más, escribí tu predicción debajo
// de cada operación y compartí todas tus predicciones 
// con Lisa. Intenta hacerlo mentalmente para
// practicar tu lectura de código.

let frase = texto
frase += " " + "es genial";
//JavaScript es genial

const negacion = !booleano;
// falso

const dobleNegacion = !!negacion;
// true

multiplicador *= 3;
// 9

const division = base * 10 / multiplicador;
// 30

const residuo = base % modulo;
// 4

const esPar = multiplicador % 2 === 0;
// false

const comparacion = acumulador == "5";
// true

const comparacionEstricta = acumulador === "5";
// false

acumulador += base;
//  14

const mayor = acumulador > base;
// false

const menorOigual = multiplicador <= 30;
// true

const operadorOR = booleano || false;
// true

const operadorAND = booleano && (base > 5);
// true

const combinado = (base * multiplicador) - modulo;
// 22