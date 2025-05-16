/*Você está gerenciando sua conta do Instagram e quer analisar o desempenho dos seus
stories nos últimos 5 dias. Você anotou o número de visualizações de cada story:

[1200, 850, 1100, 1350, 950] // Segunda a Sexta

No story de quinta-feira você fez uma enquete sobre um novo corte de cabelo, o que
pode explicar o aumento nas visualizações.

Desenvolva um programa que:
1. Encontre o dia com mais visualizações e qual foi esse dia (2 = quarta, 3 = quinta, etc.)
2. Calcule o total de visualizações no período
3. Conte quantos dias tiveram mais de 1000 visualizações (considerados "stories populares")
4. Calcule a média diária de visualizações
*/

const views = [1200, 850, 1100, 1350, 950]
const dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]

let maisViews = views[0]

let diaDeMaiorViews = "";

let totalDeViews = 0;

let storiesPopulares = 0;

for (let i = 0; i < views.length; i++) {
   if (views[i] > maisViews) {
    maisViews = views[i];
    diaDeMaiorViews = dias[i];
   }
   totalDeViews +=views[i];
   if (views[i] > 1000 ) {

   }
   if (views[i] > 1000) {
    storiesPopulares++;
   }
}
media = totalDeViews / views.length;

console.log(`O dia com mais views é: ${diaDeMaiorViews} com ${maisViews} vizualizações.`);

console.log(`O total de views nesse período é de ${totalDeViews}`);

console.log(`Total de stories populares: ${storiesPopulares}`);

console.log(`Média diária de vizualizações: ${media.toFixed(2)}`);
