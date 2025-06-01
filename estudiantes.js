const estudiantes = [
  { nombre: "Juan", nota: 5 },
  { nombre: "María", nota: 8 },
  { nombre: "Pedro", nota: 6 },
  { nombre: "Lucía", nota: 4 },
  { nombre: "Sofía", nota: 7 },
  { nombre: "Lucas", nota: 9 },
];

// Objetivo:
// Crear un nuevo array llamado estudiantesAprobados.
// Recorrer el array de estudiantes y agregar al nuevo array solo aquellos que tengan una nota mayor o igual a 6.
// Al final, mostrar el array de estudiantesAprobados y la cantidad de estudiantes que aprobaron.

const estudiantesAprobados = [];
const notaMayor6 = 6;
let indiceAprobados = 0;

for(const estudiante of estudiantes){
    if(estudiante.nota >=notaMayor6){
        estudiantesAprobados[indiceAprobados] = estudiante;
        indiceAprobados++;
    }

}
console.log(estudiantesAprobados);
console.log("Cantidad de alumnos aprobados: " + estudiantesAprobados.length);
