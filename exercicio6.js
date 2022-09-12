const prompt = require('prompt-sync')();

const x1 = Number(prompt('digite o valor de x1: '));
const x2 = Number(prompt('digite o valor de x2: '));
const y1 = Number(prompt('digite o valor de y1: '));
const y2 = Number(prompt('digite o valor de y2: '));

const x2x1 = Math.pow((x2 - x1), 2);
const y2y1 = Math.pow((y2 - y1), 2);

const d = Math.sqrt(x2x1 + y2y1);

console.log(`a distancia entre os valores é : ${d.toFixed(2)}`);