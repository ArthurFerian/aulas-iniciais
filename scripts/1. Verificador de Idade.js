/* **1. Verificador de Idade (10 pontos)**

Crie um programa que receba um array com as idades de 5 pessoas: `[17, 21, 16, 25, 19]`

- Verifique quantas pessoas são maiores de idade (idade >= 18)
- Verifique quantas pessoas são menores de idade (idade < 18)
- Exiba as duas contagens no console*/

const idades = [17, 21, 16, 25, 19];

let pessoasDeMaior = [];
let pessoasDeMenor = [];
let contagemDeMaior = 0;
let contagemDeMenor = 0;

for (let i = 0; i < idades.length; i ++) { // Usei o for e o if para identificar quais idades são maiores ou igual a 18.
    if (idades[i] >= 18) {
    contagemDeMaior++
    }
}
console.log(`A quantidade de pessoas maior de idade é: ${contagemDeMaior}`);

for (let i = 0; i < idades.length; i ++) { // No segundo for e if usei para identificar quais idades são menores ou igual a 17.
    if (idades[i] < 18) {
    contagemDeMenor++
    }
}
console.log(`A quantidade de pessoas maior de idade é: ${contagemDeMenor}`);



