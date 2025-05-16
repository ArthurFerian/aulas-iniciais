/*Exercício 1 - Média de Notas
Você está desenvolvendo um sistema para uma escola que precisa calcular a média
das notas de uma turma. Crie um array com 5 notas e calcule a média.
*/

let notas = [9.0, 8.0, 10.0, 2.0, 3.0];

for (let i = 0; i < notas.length; i++){
    soma = soma + notas[i]; 
    console.log(`valor da soma parcial: ${soma}`);
    
}

