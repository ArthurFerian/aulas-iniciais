// 15. Contagem de Números Ímpares

let number;
number = 6

if (number % 2 === 0 ) {
 console.log(`${number} é par`);
} else {
    console.log(`${number} é impar`);
    
}

// 16. Comparação de Preços por Unidade

let precoItemA = 6.00;
let quantidadeItemA = 600;

let precoItemB = 5.50;
let quantiadadeItemB = 500;

let precoPorUnidadeA = precoItemA / quantidadeItemA;
let precoPorUnidadeB = precoItemB / quantiadadeItemB;

console.log(`preço por grama do item A: R$ ${precoPorUnidadeA}`);
console.log(`preço por grama do item B: R$ ${precoPorUnidadeB}`);

if (precoPorUnidadeA < precoPorUnidadeB) {
    console.log("Item A tem o melhor custo-beneficio.");
    
} else if (precoPorUnidadeA > precoPorUnidadeB) {
    console.log("Item B tem o melhor custo-beneficio.");
} else {
    console.log("ambos os items tem o mesmo custo-beneficio.");
    
}


// 17. Cálculo do Perímetro de um Retângulo

let lado1;
let lado2;
let lado3;
let lado4;
let perimetro;

lado1 = 10;
lado2 = 10;
lado3 = 20;
lado4 = 20;

perimetro = lado1 + lado2 + lado3 + lado4
console.log(`O perimetro do retângulo é igual a ${perimetro}`);

// 18. Cálculo do Tempo Estimado de Viagem

let distancia;
let velocidade;
let tempoEstimado;

distancia = 500;
velocidade = 150;

tempoEstimado = distancia / velocidade;

console.log(`O tempo estimado da viagem será de ${tempoEstimado} horas`);

// 19. Simulação de Sorteio Aleatório

let numeros;
let numeroSorteado;

numeros = 100;
numeroSorteado = 50;
console.log(`O número que foi sorteado é o ${numeroSorteado}`);

// 20. Conversão de Notas para Conceitos

let notaa = 10;
let notaaa = 9;
let notaaaa = 7;
let somaa;
let mediaa;

somaa = notaa + notaaa + notaaaa;
mediaa = somaa / 3

if (mediaa >= 9 && mediaa <= 10){
    console.log("muito bom");
    
} else if (mediaa >= 7 && mediaa < 9) {
    console.log("bom");
    
} else if ( mediaa <=6 ) {
    console.log("ruim");
    
}

// 21. Cálculo de Fatorial

let num = 8;
let fatorial = 1;

fatorial *= num;
fatorial *= num - 1;
fatorial *= num - 2;
fatorial *= num - 3;
fatorial *= num - 4;
fatorial *= num - 5;
fatorial *= num - 6;
fatorial *= num - 7;

console.log(`O fatorial de ${num} é ${fatorial}`);

// 22. Separação de Pares e Ímpares

let numm;
let numm2
numm = 10
numm2 = 11

if (numm % 2 === 0 ) {
 console.log(`${numm} é par`);
} else {
    console.log(`${numm} é impar`);
    
} if (numm2 % 2 === 0 ) {
    console.log(`${numm2} é par`);
   } else {
       console.log(`${numm2} é impar`);
       
   }

// 23. Soma de Dígitos de um Número

let somaDigitos;
let numero1;
let numero2;
let numero3;

numero1 = 7;
numero2 = 7;
numero3 = 7;

somaDigitos = numero1 + numero2 + numero3;
console.log(`A soma de todos os Digitos é ${somaDigitos}`);

// 25. Cálculo da Média Ponderada

let nota1;
let nota2;
let nota3;
let somaNotas;
let media;
let quantidadeNotas;

quantidadeNotas = 3
nota1 = 7;
nota2 = 6;
nota3 = 10;
somaNotas = nota1 + nota2 + nota3;
media = somaNotas / quantidadeNotas

console.log(`A média das notas é ${media}`);

// 26. Cálculo de Horas Trabalhadas

let horaEntrada;
let horaSaida;
let horasTrabalhadas;

horaEntrada = 12;
horaSaida = 18;
horasTrabalhadas = horaSaida - horaEntrada;

console.log(`O total de horas trabalhadas é ${horasTrabalhadas} horas`);

//27. Divisão de Conta de Restaurante

let valorTotal;
let participantes;
let divisao;

valorTotal = 1000;
participantes = 5;
divisao = valorTotal / participantes;

console.log(`O valor que cada um vai pagar é de R$ ${divisao}.`);

//28. Conversão de Moeda

let valorAtual;
let taxaCambio;
let moeda1;
let moeda2; 

valorAtual = 200;
taxaCambio = 5.76;
moeda1 = "real";
moeda2 = "dolar";
conerveter = valorAtual / taxaCambio;

console.log(`A conversão de ${valorAtual} da moeda ${moeda1} para o ${moeda2} é ${conerveter}`);



