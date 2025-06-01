const productos = [
  { nombre: "Remera", categoria: "ropa", precio: 1500, stock: 10 },
  { nombre: "Pantalón", categoria: "ropa", precio: 3000, stock: 0 },
  { nombre: "Zapatillas", categoria: "calzado", precio: 7000, stock: 5 },
  { nombre: "Gorra", categoria: "accesorios", precio: 800, stock: 3 },
  { nombre: "Campera", categoria: "ropa", precio: 12000, stock: 2 },
  { nombre: "Medias", categoria: "ropa", precio: 500, stock: 0 },
];
 //filtros

 const filtros = {
  precioMin: 1000,
  precioMax: 8000,
  stockDisponible: true, // solo productos con stock > 0
};

/* Recorrer el array productos.
Filtrar solo los productos que tengan stock (si stockDisponible es true).
Filtrar los productos cuyo precio esté entre precioMin y precioMax.
Guardar los productos que cumplen en un nuevo array productosFiltrados. */
const productosFiltrados = [];
let indiceProdFiltradas = 0;

for(const producto of productos){
    if(producto.stock > 0){
        if(producto.precio >= filtros.precioMin && producto.precio <= filtros.precioMax){
            productosFiltrados[indiceProdFiltradas] = producto;
            indiceProdFiltradas++;
        }
    }
}
console.log(productosFiltrados);
console.log("Cantidad de productos filtrados  " + productosFiltrados.length);