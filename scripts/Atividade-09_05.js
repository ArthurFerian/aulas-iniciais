/*Você está desenvolvendo um aplicativo de previsão do tempo para o seu bairro.
Durante a última semana, você anotou as temperaturas máximas registradas:

[28, 31, 27, 29, 30, 32, 33] // Domingo a Sábado

Sua mãe está planejando um piquenique e pediu para você analisar como estava o tempo.

Desenvolva um programa que:
1. Calcule a temperatura média da semana
2. Informe a temperatura máxima e em qual dia ela ocorreu
3. Informe a temperatura mínima e em qual dia ela ocorreu
*/
const temperatura = [28, 31, 27, 29, 30, 32, 33]
const dia = ["Dom, Seg, Ter, Qua, Qui, Sex, Sab"]

let tempTotal = 0
let media = 0
let maiorTemp = temperatura[0]


for (let i = 0; i < temperatura.length; i++) {
    tempTotal += temperatura[i] 
}

media = tempTotal / temperatura.length;
console.log(`O valor médio da temperatura da semana é: ${media}°C`);


for (let i = 1; i < temperatura.length; i++) {
    if (temperatura [i] > maiorTemp) {
        maiorTemp = temperatura[i];
    }
}

console.log(`A temperatura mais alta da semana é: ${maiorTemp}°C`);
