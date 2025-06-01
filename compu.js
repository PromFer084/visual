const ram = 16; // GB
const almacenamiento = 2; // TB
const nucleosCPU = 8;
const velCpu = 3.5;
const precio = 1000;

const esPotente = ram >= 8 && nucleosCPU >= 4;
const capacidad = almacenamiento > 1 ? "Alta" : "Baja";
const tipoCPU = velCpu >= 3.5? "Rapida" : "Lenta";
const rangoPrecio = precio >1500? "Costosa" : "Asequible";

console.log("¿Es potente?", esPotente);
console.log("Capacidad de almacenamiento:", capacidad);
console.log("el tipo de cpu" , tipoCPU);
console.log("el precio es" , rangoPrecio);

// Redacta una descripción
const descripcion = `Esta computadora es ${esPotente ? "potente" : "no potente"}, tiene una capacidad de almacenamiento ${capacidad}, un CPU ${tipoCPU} y un precio ${rangoPrecio}.`;
console.log(descripcion);