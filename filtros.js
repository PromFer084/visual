const productos = [
  { nombre: "Remera", categoria: "ropa", stock: 10 },
  { nombre: "Pantalón", categoria: "ropa", stock: 0 },
  { nombre: "Zapatos", categoria: "calzado", stock: 5 },
  { nombre: "Gorra", categoria: "ropa", stock: 3 },
  { nombre: "Botas", categoria: "calzado", stock: 0 },
  { nombre: "Camisa", categoria: "ropa", stock: 7 },
];

const productosDisponibles = [];

for(const producto of productos){
    if(producto.stock > 0 && producto.categoria == "ropa"){

        productosDisponibles.push(producto.nombre);
    
    }

}
console.log(productosDisponibles);
