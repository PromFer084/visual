/* let counter = 0;

// mientras counter sea menor a 10...
while(counter < 10){
  // esto se va a ejecutar
  console.log("Contador", counter);
  
  // a continuación le sumamos 1 a counter para que en algún
  // momento llegue a 10 y el while termine
  // sino hacemos este ++ el while se convierte
  // en un bucle infinito y nuestro programa se "cuelga"
  counter++;
}

console.log("Terminó de contar");
 */

const carrito = [
    {
        name: "Laptop Gamer X100",
        price: 1500,
        description: "Laptop de alto rendimiento con tarjeta gráfica dedicada y 16GB de RAM, ideal para juegos y edición de video."
    },
    {
        name: "Teclado Mecánico RGB",
        price: 120,
        description: "Teclado mecánico con retroiluminación RGB y switches personalizables para una experiencia de escritura fluida."
    },
    {
        name: "Mouse Inalámbrico Pro",
        price: 60,
        description: "Mouse ergonómico con sensor de alta precisión y conectividad inalámbrica de baja latencia."
    },
    {
        name: "Disco Duro SSD 1TB",
        price: 150,
        description: "Unidad SSD de 1TB con velocidades de lectura y escritura ultrarrápidas para mejorar el rendimiento del sistema."
    },
    {
        name: "Memoria RAM 16GB DDR4",
        price: 80,
        description: "Módulo de memoria RAM DDR4 de 16GB con alto rendimiento para multitarea y aplicaciones exigentes."
    },
    {
        name: "Tarjeta Gráfica RTX 3060",
        price: 450,
        description: "Tarjeta gráfica con arquitectura Ampere, 12GB de memoria GDDR6 y soporte para trazado de rayos en tiempo real."
    }
];

//let precios = [];
/*let index = 0;

// ahora el límite es la cantidad de items del carrito
while (index < carrito.length) {
    precios[index] = carrito[index].price;
    index++;
}

console.log(precios); */

// Sumar todos los precios
/* let suma = 0;
let index = 0;

while (index < carrito.length) {
    suma += carrito[index].price;
    index++;
}

console.log("Suma total: ", suma); */
const precios = carrito.map(item => item.price);
let promedio = 0;
let contador = 0;

while (contador < precios.length) {
    promedio += precios[contador];
    contador++;
}

promedio /= precios.length;
console.log("Promedio: ", promedio);