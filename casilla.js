const inbox = [
  {
    messageId: 1,
    asunto: "Oferta especial",
    preview: "Aprovechá este descuento exclusivo por tiempo limitado..."
  },
  {
    messageId: 2,
    asunto: "Reunión programada",
    preview: "Recordatorio: tenés una reunión mañana a las 10 AM."
  },
  {
    messageId: 3,
    asunto: "Novedades en tu cuenta",
    preview: "Actualizamos nuestras políticas de privacidad. Más detalles..."
  }
];

const count = inbox.length;

const m = count === 1? "mensaje": "mensajes"; 
// El ternario que debés agregar debe devolver
// "mensaje" si count es == 1
// y "mensajes" si mayor

const message = count=== 0? "No tenés mensajes" : `Tenés ${count} ${m} nuevo${count === 1 ? "" : "s"}`;
/*
  Tenés que usar 'count' en un ternario para 
  determinar si el mensaje es "No hay mensajes" o 
  "Hay x mensajes" y usar 'm' en vez de la palabra 'mensajes'
*/

console.log(message);