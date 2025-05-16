const amigos = ["Gabriel", "Murilo", "Julia", "Bianca", "Davi"];
console.log(amigos[2]);

amigos[0] = "Eu Mesmo";
console.log(amigos);

amigos[5] = "Ana Beatriz";
console.log(amigos);

console.log(amigos.length);

console.table(amigos);

amigos[amigos.length] = "eloisa";
console.table(amigos);
console.log(`Tamanho final do array: ${amigos.length}`);
