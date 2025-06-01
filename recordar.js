const libros = {
    Libro1:{
    titulo:"el señor de los anillos",
    autor : "JR Tolkien",
    anio: 1998
    },

     Libro2:{
    titulo:"100 años de soledad",
    autor : "Cortazar",
    anio: 1970
    },

     Libro3:{
    titulo:"Juan Salvador Gaviota",
    autor : "Pedro Lopez",
    anio: 1956
    },
}
for (const libroKey in libros) {
  const libro = libros[libroKey]; // Accedemos al objeto del libro
  console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}`);
}


const capitulos = ['Introducción', 'Capítulo 1', 'Capítulo 2'];

// Acceder a los datos de cada libro
console.log(libros.Libro1.titulo);  // 'el señor de los anillos'
console.log(libros.Libro1.autor);   // 'JR Tolkien'
console.log(capitulos[0]);           // 'Introducción'

console.log(libros.Libro2.titulo);  // '100 años de soledad'
console.log(libros.Libro2.autor);   // 'Cortazar'

console.log(libros.Libro3.titulo);  // 'Juan Salvador Gaviota'
console.log(libros.Libro3.autor);   // 'Pedro Lopez'



