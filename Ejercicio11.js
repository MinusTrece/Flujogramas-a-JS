const t = prompt("Ingrese el tamaño del vector:");
const x = prompt("Ingrese el valor de x:");
const vector = [];
for (let i = 0; i < t; i++) {
  vector[i] = x * i;
}
console.log(vector);

