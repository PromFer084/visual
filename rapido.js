const iterations = 1e6; // 1 millón
const array = Array.from({ length: iterations }, (_, i) => i);

// Bucle for clásico
console.time("for");
for (let i = 0; i < array.length; i++) {
  let x = array[i] * 2;
}
console.timeEnd("for");

// Bucle while
console.time("while");
let i = 0;
while (i < array.length) {
  let x = array[i] * 2;
  i++;
}
console.timeEnd("while");

// Bucle for...of
console.time("for...of");
for (const num of array) {
  let x = num * 2;
}
console.timeEnd("for...of");

// Bucle forEach
console.time("forEach");
array.forEach(num => {
  let x = num * 2;
});
console.timeEnd("forEach");