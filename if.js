/*const propiedad = {
  id: 10543,
  titulo: "Moderno departamento en el centro",
  descripcion: "Luminoso departamento de 2 habitaciones con balcón y excelente vista a la ciudad.",
  tipo: "departamento", // Puede ser "casa", "departamento", "terreno", etc.
  precio: 800, // Precio mensual en la moneda especificada
  ubicacion: {
    direccion: "Av. Principal 123",
    ciudad: "Buenos Aires",
    provincia: "Buenos Aires",
    pais: "Argentina",
    codigoPostal: "C1000"
  },
  superficie: 80, // m²
  habitaciones: 2,
  banos: 1,
  amenities: ["Gimnasio", "Piscina", "SUM"],
  servicios: ["Luz", "Gas", "Agua", "Internet"],
  propietario: {
    nombre: "Mariana López",
    telefono: "+54 9 11 5555-1234",
    email: "mariana@example.com"
  },
  diasPublicado: 15, // Número de días que lleva publicado
  visitas: 254,
  destacado: true // Indica si la propiedad es destacada en el sitio
};*/

const propiedad = {
  id: 30002,
  titulo: "Departamento económico en el centro",
  descripcion: "Cómodo departamento de 2 habitaciones, sin amoblar.",
  tipo: "departamento",
  precio: 950,
  ubicacion: {
    direccion: "Av. Corrientes 987",
    ciudad: "Buenos Aires",
    provincia: "Buenos Aires",
    pais: "Argentina",
    codigoPostal: "C1010",
  },
  superficie: 85, // Menor a 80
  habitaciones: 2,
  banos: 1,
  amenities: ["SUM"],
  servicios: ["Luz", "Gas", "Agua", "Internet"],
  propietario: {
    nombre: "Sofía Méndez",
    telefono: "+54 9 11 2222-3333",
    email: "sofia@example.com",
  },
  diasPublicado: 5, // Mayor a 7
  visitas: 80,
  destacado: false,
};

// Evaluamos las condiciones
const esDepa = propiedad.tipo === "departamento"; // true
const precioMaximo = propiedad.precio <= 1000; // true
const minHabitaciones = propiedad.habitaciones >= 2; // true
const superficie = propiedad.superficie > 80; // false
const publicado = propiedad.diasPublicado < 7; // false

// Chequeamos todas las condiciones
if (esDepa && precioMaximo && minHabitaciones) {
  console.log("Esta propiedad cumple");
  
  if (superficie && publicado) {
    console.log("Contactar a esta propiedad lo antes posible.");
  }
} else {
  console.log("Esta propiedad no cumple");
  console.log(`La propiedad ${propiedad.id} no cumple con las condiciones`);

  if (!esDepa) {
    console.log("No es un departamento.");
  }
  if (!precioMaximo) {
    console.log("El precio es demasiado alto.");
  }
  if (!minHabitaciones) {
    console.log("No tiene al menos 2 habitaciones.");
  }
  if (!superficie) {
    console.log("La superficie es menor a 80 m².");
  }
  if (!publicado) {
    console.log("La propiedad lleva más de 7 días publicada.");
  }
}

