const prompt = require('prompt-sync')();

const factory = Number(prompt('Digite o custo de fábrica: '));

const distributor=28, tax=45;
const cost = factory + (distributor + tax);

console.log(`\nO custo ao consumidor é de: ${cost}.%`)