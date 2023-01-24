let NumeroBinario = [0, 1, 0, 1];
let decimal = 0;

for (let i = 0; i < NumeroBinario.length; i++) {
    decimal += NumeroBinario[i] * Math.pow(2, NumeroBinario.length - 1 - i);
}
console.log(decimal);
