// demo.js

// Mostramos toda la lista
console.log("Todos los argumentos:");
console.log(process.argv);

// Mostramos solo el argumento del usuario
const argumento = process.argv[2];
console.log("El argumento que escribiste es:");
console.log(argumento);
