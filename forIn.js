const canciones = [
  { titulo: "Don", duracion: 4.5 },
  { titulo: "Perfecta", duracion: 3.2 },
  { titulo: "Mentía", duracion: 2.8 },
  { titulo: "Yo Te Diré", duracion: 5.1 },
  { titulo: "El Profe", duracion: 3.5 },
  { titulo: "Traición", duracion: 2.7 },
];

// Usamos for...in para recorrer el array
for (const indice in canciones) {
  // Esto sería más corto con un for...of pero no tendríamos
  // acceso al indice
  if (canciones[indice].duracion > 3) {
    console.log(
      `La canción "${canciones[indice].titulo}" tiene más de 3 minutos y está en la posición ${indice} del array.`
    );
  }
}