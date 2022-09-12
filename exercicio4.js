const prompt = require('prompt-sync')();

const numA = Number(prompt('entre com numero A: '));
const numB = Number(prompt('entre com numero B: '));
const numC = Number(prompt('enter entre com numero c: '));

const numR = Math.pow((numA + numB), 2);
const numS = Math.pow((numB + numC), 2);

const numD = (numR + numS) / 2;

console.log(`\nresponda: ${numD}`);