const numeroDeMes= process.argv[2];

const informacionMes = [
    {
    nombreDelMes: "Enero",
    cantidadDeDias: 31,
    eventoDelMes: "Año Nuevo",
  },
  {
    nombreDelMes: "Febrero",
    cantidadDeDias: 28,
    eventoDelMes: "Día de San Valentín",
  },
    {
    nombreDelMes: "Marzo",
    cantidadDeDias: 31,
    eventoDelMes: "Día Internacional de la Mujer",
  },
  {
    nombreDelMes: "Abril",
    cantidadDeDias: 30,
    eventoDelMes: "Semana Santa",
  },
  {
    nombreDelMes: "Mayo",
    cantidadDeDias: 31,
    eventoDelMes: "Día del Trabajador",
  },
  {
    nombreDelMes: "Junio",
    cantidadDeDias: 30,
    eventoDelMes: "Día del Padre",
  },
  {
    nombreDelMes: "Julio",
    cantidadDeDias: 31,
    eventoDelMes: "Día de la Independencia (Argentina)",
  },
  {
    nombreDelMes: "Agosto",
    cantidadDeDias: 31,
    eventoDelMes: "Día del Niño (variable por país)",
  },
  {
    nombreDelMes: "Septiembre",
    cantidadDeDias: 30,
    eventoDelMes: "Comienzo de la primavera (en el hemisferio sur)",
  },
  {
    nombreDelMes: "Octubre",
    cantidadDeDias: 31,
    eventoDelMes: "Halloween",
  },
  {
    nombreDelMes: "Noviembre",
    cantidadDeDias: 30,
    eventoDelMes: "Día de Todos los Santos",
  },
  {
    nombreDelMes: "Diciembre",
    cantidadDeDias: 31,
    eventoDelMes: "Navidad",
  },
]



const posicionEnElArray = numeroDeMes - 1;
const infoDelMes = informacionMes[posicionEnElArray];

console.log("Numero de mes:", numeroDeMes);
console.log("Nombre del mes:", infoDelMes.nombreDelMes);
console.log("Cantidad de días:", infoDelMes.cantidadDeDias);
console.log("Evento del mes:", infoDelMes.eventoDelMes);


