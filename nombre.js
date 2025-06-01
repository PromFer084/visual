const nombres = ["Ana", "Fernando", "María", "Sofía", "Alejandro", "Luis"];

const nombresLargos = [];

// Usá un for para recorrer el array nombres
// y un if para filtrar los nombres que tengan más de 5 letras
// Agregá esos nombres al array nombresLargos usando push()

// [Tu lógica]
for (const n of nombres){
    if(n.length > 5){
        nombresLargos.push(n);
    }
}

console.log("Nombres con más de 5 letras:", nombresLargos);
