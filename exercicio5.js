const prompt = require('prompt-sync')();

const nota1 = Number(prompt('Digite a 1ª nota:: '));
const nota2 = Number(prompt('Digite a 2ª nota:: '));
const nota3 = Number(prompt('Digite a 3ª nota:: '));

const media = ((2 * nota1) + (3 * nota2) + (5 * nota3)) / 10;

console.log(`A média ponderada é: ${media}`);