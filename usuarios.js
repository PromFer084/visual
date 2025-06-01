const usuarios = [
  {
    id: 1,
    nombre: "Juan Pérez",
    publicaciones: [
      { title: "Departamento en alquiler - Centro", type: "alquiler", fecha: "2024-03-15" },
      { title: "Casa en venta - Suburbios", type: "venta", fecha: "2023-12-01" },
    ],
  },
  {
    id: 2,
    nombre: "María López",
    publicaciones: [
      { title: "Local comercial en alquiler - Zona Norte", type: "alquiler", fecha: "2024-01-20" },
    ],
  },
  {
    id: 3,
    nombre: "Carlos García",
    publicaciones: [
      { title: "Terreno en venta - Campo", type: "venta", fecha: "2023-11-10" },
      { title: "Cabaña en permuta - Montaña", type: "permuta", fecha: "2024-02-05" },
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
      { title: "Oficina en alquiler - Centro", type: "alquiler", fecha: "2024-04-01" },
      { title: "Apartamento en venta - Playa", type: "venta", fecha: "2023-09-15" },
    ],
  },
  {
    id: 6,
    nombre: "Sofía Martínez",
    publicaciones: [],
  },
];

const usuariosConPublicaciones2024={
ids:[],
}

for(const u of usuarios){
    for(const pub of u.publicaciones){
        if(pub.fecha.substring(0, 4) === "2024"&& !usuariosConPublicaciones2024.ids.includes(u.id)){
            usuariosConPublicaciones2024.ids.push({ id: u.id, nombre: u.nombre });
        }
    }
}
console.log(usuariosConPublicaciones2024);