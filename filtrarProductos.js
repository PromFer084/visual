const productos = [
  { nombre: "Laptop", precio: 1000, enOferta: false },
  { nombre: "Celular", precio: 500, enOferta: true },
  { nombre: "Tablet", precio: 300, enOferta: true },
  { nombre: "Monitor", precio: 200, enOferta: false },
  { nombre: "Teclado", precio: 50, enOferta: true },
];

const productosEnOferta = [];
let indiceOferta = 0;

// Aquí tenés que recorrer el array de productos
// y agregar los que están en oferta al array productosEnOferta


for(prod of productos){
    if(prod.enOferta ==true){
        productosEnOferta[indiceOferta]=prod;
        indiceOferta++;
    }
}
console.log(productosEnOferta);
console.log("la cantidad de productos en ofertas: " + productosEnOferta.length);