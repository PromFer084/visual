const productos = [
  { name: "Laptop", price: 1200 },
  { name: "Smartphone", price: 800 },
  { name: "Tablet", price: 300 },
  { name: "Auriculares", price: 150 },
  { name: "Reloj inteligente", price: 250 },
];

// Definí un precio máximo
const precioMaximo = 500;
const productosBaratos = [];

// Usá un for para recorrer el array de productos
// y un if para filtrar los que están por debajo del precio máximo
// Agregá los productos filtrados al array productosBaratos usando push()

// [Tu lógica]
for (const p of productos){
    if(p.price < precioMaximo){
        productosBaratos.push(p);
    }
    
}

console.log("Productos por debajo de", precioMaximo, "son:", productosBaratos);
