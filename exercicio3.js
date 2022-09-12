const prompt = require('prompt-sync')();

const time = Number(prompt('digite o tempo de funcionamento: '));

const hours = (time / 3600).toFixed(0);
const minutes = ((time % 3600) / 60).toFixed(0);
const seconds = ((time % 3600) % 60).toFixed(0);

console.log(`o evento durou: ${hours} horas, ${minutes} e minutos ${seconds} sugundos.`);