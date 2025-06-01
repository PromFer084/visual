// Array de teléfonos celulares con nombre y precio
const telefonos = [
  { nombre: "Samsung Galaxy S21", precio: 799 },
  { nombre: "iPhone 13", precio: 999 },
  { nombre: "Google Pixel 6a", precio: 449 },
  { nombre: "Xiaomi Redmi Note 12", precio: 299 },
  { nombre: "OnePlus Nord CE 3 Lite", precio: 329 },
  { nombre: "Motorola Moto G Stylus", precio: 199 },
];

// Presupuesto disponible
let presupuesto = 500;

// Mostrar los teléfonos dentro del presupuesto
let index = 0;

let telefonosDentroDePresupuesto = [];
let indiceAux = 0;

while (index < telefonos.length) {
  const tel = telefonos[index];
  if (tel.precio <= presupuesto) {
    telefonosDentroDePresupuesto[indiceAux] = tel;
    indiceAux++;
  }
  index++;
}

// Al finalizar deberías ver los teléfonos dentro del presupuesto
console.log("Teléfonos dentro de presupuesto", telefonosDentroDePresupuesto);