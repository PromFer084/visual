/*
El costo base es de $300
Si el envío es internacional, añade un recargo adicional de $100 al costo total.
Si el envío es express, añade un recargo adicional de $200 al costo total.
Añade $10 al costo base por cada kilo total de peso de los productos*/

const envio = {
  id: "AR123456789",
  destinatario: "Laura González",
  direccion: {
    calle: "Av. Santa Fe",
    numero: 1930,
    ciudad: "CABA",
    provincia: "Buenos Aires"
  },
  productos: [
    { nombre: "Libro", peso: 1, valor: 1200 },
    { nombre: "Maceta", peso: 2, valor: 800 }
  ],
  pesoTotal: 3,
  distancia: 50, // distancia en km
  tipo: "expres", // puede ser "estándar" o "express"
  fechaEnvio: { dia: 26, mes: 3, anio: 2024 },
  estado: "en camino", // puede ser "preparación", "en camino", "entregado"
  esInternacional: true
};


let costoDeEnvio = 300;


if(envio.esInternacional){
    costoDeEnvio +=  100;
}
if(envio.tipo === "expres"){
    costoDeEnvio += 200;
    console.log("se añade un extra por se expres")
}
costoDeEnvio += envio.pesoTotal * 10;
console.log(costoDeEnvio);

