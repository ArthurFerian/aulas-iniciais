/* **4. Transformador de Temperaturas (15 pontos)**

Crie um programa que converta uma lista de temperaturas de Celsius para Fahrenheit:

- Use o array: `[0, 10, 20, 30, 40]` (temperaturas em Celsius)
- Crie um novo array com as temperaturas convertidas para Fahrenheit usando a fórmula: F = C * 9/5 + 32
- Exiba ambos os arrays lado a lado usando console.table()
*/



const tempCelsius = [0, 10, 20, 30, 40];

let tempFahrenheit = [];

for (let i = 0; i < tempCelsius.length; i++) { // Usei o for com as temperaturas convertidas para Fahrenheit usando a fórmula: F = C * 9/5 + 32.
    tempFahrenheit[i] = tempCelsius[i] * 9/5 + 32
}

console.table(tempCelsius);
console.table(tempFahrenheit);
