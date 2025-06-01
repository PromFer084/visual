const usuarios = [
  {
    id: 1,
    nombre: "Juan Pérez",
    publicaciones: [
      { title: "Departamento en alquiler - Centro", type: "alquiler" },
      { title: "Casa en venta - Suburbios", type: "venta" },
    ],
  },
  {
    id: 2,
    nombre: "María López",
    publicaciones: [
      { title: "Local comercial en alquiler - Zona Norte", type: "alquiler" },
    ],
  },
  {
    id: 3,
    nombre: "Carlos García",
    publicaciones: [
      { title: "Terreno en venta - Campo", type: "venta" },
      { title: "Cabaña en permuta - Montaña", type: "permuta" },
    ],
  },
  {
    id: 4,
    nombre: "Ana Torres",
    publicaciones: [],
  },
  {
    id: 5,
    nombre: "Luis Gómez",
    publicaciones: [
      { title: "Oficina en alquiler - Centro", type: "alquiler" },
      { title: "Apartamento en venta - Playa", type: "venta" },
    ],
  },
  {
    id: 6,
    nombre: "Sofía Martínez",
    publicaciones: [],
  },
];

const resultados = {
  alquiler: [],
  venta: [],
  permuta: []

}

for (const u of usuarios){
  for(const pub of u.publicaciones){
    if(pub.type == "alquiler"){
      resultados.alquiler.push(u.id);
    } else if(pub.type == "venta"){
      resultados.venta.push(u.id);
    }else if(pub.type == "permuta"){
      resultados.permuta.push(u.id);
    }
  }
  
}

console.log(resultados);