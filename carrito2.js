// Array con productos en el carrito
const carrito = [
  { descripcion: "Teclado Mecánico", precioUnitario: 100, cantidad: 2 },
  { descripcion: "Mouse Inalámbrico", precioUnitario: 50, cantidad: 1 }
];


// calcula el precio de cada producto basado 
// en el precioUnitario y la cantidad
const precioProducto1 = 100 * 2;
const precioProducto2 = 50 * 1; 
// lo mismo con el otro producto

const total = precioProducto1 + precioProducto2
  
console.log(`El total del carrito es $${total}`);
  