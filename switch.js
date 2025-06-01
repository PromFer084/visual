// day es un valor del 1 al 7
const day = 3;
let dayName = "";

switch (day) {
    case 1:
        dayName = "Lunes";
        break;
    case 2:
        dayName = "Martes";
        break;
    case 3:
        dayName = "Miercoles";
        break;
    case 4:
        dayName = "Jueves";
        break;
    case 5 :
        dayName = "Viernes";
        break;
    case 6:
        dayName = "Sabado";
        break;
    case 7:
        dayName = "Domingo";
        break;
 
        default:
        dayName = "dia invalido";
}

console.log("Hoy es", dayName);