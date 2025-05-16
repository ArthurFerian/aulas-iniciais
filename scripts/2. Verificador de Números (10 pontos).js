/* **2. Verificador de Números (10 pontos)**

Dado o array de números: `[12, 5, 8, 21, 16, 7, 30, 45, 13, 27]`

- Conte quantos números são pares
- Conte quantos números são ímpares
- Conte quantos números são maiores que 20
- Exiba os resultados no console*/

const numeros = [12, 5, 8, 21, 16, 7, 30, 45, 13, 27];

let contagemNumPares = 0;
let contagemNumImpares = 0;
let maiorQue20 = 0;

for (let i = 0; i < numeros.length; i++) { // Usei o if para descobrir quais números são pares.
    if (numeros[i] % 2 == 0) {
        contagemNumPares++
    }
}

console.log(`Os números pares são: ${contagemNumPares}`);

for (let i = 0; i < numeros.length; i++) { // Usei o if para descobrir quais números são impares.
    if (numeros[i] % 2 == 1) {
        contagemNumImpares++
    }
}

console.log(`Os números impares são: ${contagemNumImpares}`);

for (let i = 0; i < numeros.length; i ++) { // Usei o if para descobrir quais números são  maiores que 20.
    if (numeros[i] >= 20) {
    maiorQue20++
    }
}
console.log(`A quantidade números maior que 20: ${maiorQue20}`);