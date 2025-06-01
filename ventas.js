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
      { title: "Cabaña en venta - Montaña", type: "venta" },
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

// Esto es un pequeño indice/diccionario
// con los ids de los usuarios con ventas
const idsDeUsuarioConVentas = {};

for (const usuario of usuarios) {
  console.log("Evaluando el usuario:", usuario.id);

  // Recorre las publicaciones de este usuario
  // y verifica si hay alguna del tipo "venta"
  // Si es así, guarda el id en idsDeUsuarioConVentas
  for( const p of usuario.publicaciones){
     if(p.type === "venta"){
        idsDeUsuarioConVentas [usuario.id] =  true;
    }

  }
}

console.log(
  "Las propiedades en venta son",
  idsDeUsuarioConVentas
);
