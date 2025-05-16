let views = [1200, 3400, 5600, 8900, 2300, 4500];

views[1] = 9000;

console.table(views)

let maiorViews = views[0];

for (let i = 1; i < views.length; i++) {
    if (views [i] > maiorViews) {
        maiorViews = views[i];
    }
}

console.log(`O maior número de views é: ${maiorViews}`);

