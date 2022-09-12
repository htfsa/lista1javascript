const prompt = require('prompt-sync')();

const days = Number(prompt('quanto tempo? : '));

const year = (days / 365).toFixed(0);
const month = ((days % 365) / 30).toFixed(0);
const day = ((days % 365) % 30).toFixed(0);

console.log(`você e${day} dias, ${month} dias e ${year} anos`);