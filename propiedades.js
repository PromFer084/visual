const propiedades = [
  {
    barrio: "Palermo",
    tipoOperacion: "alquiler",
    tipoPropiedad: "departamento",
    ambientes: 2,
    precio: 120000,
    metrosCuadrados: 50,
  },
  {
    barrio: "Recoleta",
    tipoOperacion: "alquiler",
    tipoPropiedad: "departamento",
    ambientes: 3,
    precio: 250000,
    metrosCuadrados: 85,
  },
  {
    barrio: "Belgrano",
    tipoOperacion: "alquiler",
    tipoPropiedad: "casa",
    ambientes: 5,
    precio: 350000,
    metrosCuadrados: 120,
  },
  {
    barrio: "Villa Crespo",
    tipoOperacion: "alquiler",
    tipoPropiedad: "departamento",
    ambientes: 2,
    precio: 100000,
    metrosCuadrados: 45,
  },
  {
    barrio: "San Telmo",
    tipoOperacion: "compra",
    tipoPropiedad: "departamento",
    ambientes: 4,
    precio: 300000,
    metrosCuadrados: 90,
  },
  {
    barrio: "Caballito",
    tipoOperacion: "alquiler",
    tipoPropiedad: "casa",
    ambientes: 4,
    precio: 280000,
    metrosCuadrados: 110,
  },
  {
    barrio: "Núñez",
    tipoOperacion: "compra",
    tipoPropiedad: "quinta",
    ambientes: 6,
    precio: 900000,
    metrosCuadrados: 200,
  },
  {
    barrio: "Almagro",
    tipoOperacion: "alquiler",
    tipoPropiedad: "departamento",
    ambientes: 1,
    precio: 80000,
    metrosCuadrados: 35,
  },
  {
    barrio: "Barracas",
    tipoOperacion: "compra",
    tipoPropiedad: "departamento",
    ambientes: 2,
    precio: 150000,
    metrosCuadrados: 60,
  },
  {
    barrio: "La Boca",
    tipoOperacion: "alquiler",
    tipoPropiedad: "departamento",
    ambientes: 3,
    precio: 110000,
    metrosCuadrados: 70,
  },
  {
    barrio: "Flores",
    tipoOperacion: "compra",
    tipoPropiedad: "casa",
    ambientes: 4,
    precio: 400000,
    metrosCuadrados: 130,
  },
  {
    barrio: "Boedo",
    tipoOperacion: "alquiler",
    tipoPropiedad: "departamento",
    ambientes: 2,
    precio: 95000,
    metrosCuadrados: 55,
  },
  {
    barrio: "Villa Devoto",
    tipoOperacion: "compra",
    tipoPropiedad: "quinta",
    ambientes: 5,
    precio: 750000,
    metrosCuadrados: 180,
  },
  {
    barrio: "Liniers",
    tipoOperacion: "alquiler",
    tipoPropiedad: "casa",
    ambientes: 3,
    precio: 200000,
    metrosCuadrados: 100,
  },
  {
    barrio: "Parque Patricios",
    tipoOperacion: "compra",
    tipoPropiedad: "departamento",
    ambientes: 2,
    precio: 220000,
    metrosCuadrados: 65,
  },
];

const filtros = {
  barrio: ["Palermo", "Recoleta"], // Lista de barrios aceptados
  tipoOperacion: "alquiler", // Filtrar por tipo de operación ('alquiler' o 'compra')
  tipoPropiedad: ["departamento", "casa"], // Lista de tipos de propiedad aceptados
  ambientesMin: 2, // Número mínimo de ambientes
  ambientesMax: 4, // Número máximo de ambientes
  precioMin: 100000, // Precio mínimo
  precioMax: 300000, // Precio máximo
  metrosCuadradosMin: 50, // Metros cuadrados mínimos
  metrosCuadradosMax: 100, // Metros cuadrados máximos
};

const propiedadesFiltradas = []; //va a guardar las propiedades que cumplan con los filtros.
let indicePropsFiltradas = 0; //Esto declara una variable para llevar el control del índice donde se va a guardar cada propiedad que cumpla los filtros.

// Acá tenés que plantear el for...of que recorre el array de propiedades
// en cada propiedad tenés que hacer las preguntas pertinentes
// y en caso de cumplir los requisitos de los filtros,
// agregar la propiedad al array propiedadesFiltradas
// usando la variable indicePropsFiltradas para "empujar" la propiedad en el array

// en algunos casos como el de tipoDePropiedad o barrio, vas a necesitar usar
// otro bucle para iterar todas las posiciones del array de filtros
// y compararlo con la propiedad

for (const propiedad of propiedades) {
  let cumpleFiltros = true;

  // Verificar tipo de operación
  if (propiedad.tipoOperacion !== filtros.tipoOperacion) {
    cumpleFiltros = false;
  }

  // Verificar tipo de propiedad
  let encontrado = false;
  for (const tipo of filtros.tipoPropiedad) {
    if (tipo === propiedad.tipoPropiedad) {
      encontrado = true;
      break; // Si encontrás uno que coincide, no hace falta seguir buscando
    }
  }
  if (!encontrado) {
    cumpleFiltros = false;
  }

  // Verificar ambientes
  if (
    propiedad.ambientes < filtros.ambientesMin ||
    propiedad.ambientes > filtros.ambientesMax
  ) {
    cumpleFiltros = false;
  }

  // Verificar precio
  if (
    propiedad.precio < filtros.precioMin ||
    propiedad.precio > filtros.precioMax
  ) {
    cumpleFiltros = false;
  }

  // Verificar metros cuadrados
  if (
    propiedad.metrosCuadrados < filtros.metrosCuadradosMin ||
    propiedad.metrosCuadrados > filtros.metrosCuadradosMax
  ) {
    cumpleFiltros = false;
  }

  // Agregar a propiedadesFiltradas si cumple todos los filtros
  if (cumpleFiltros) {
    propiedadesFiltradas[indicePropsFiltradas] = propiedad;
    indicePropsFiltradas++;
  }
}

console.log(propiedadesFiltradas);
console.log("Resultados encontrados: " + propiedadesFiltradas.length);

