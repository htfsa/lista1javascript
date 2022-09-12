
		const prompt = require('prompt-sync')();

        const day = Number(prompt('quantos anos você tem '));
        const month = Number(prompt('quantos meses você tem '));
        const year = Number(prompt('quantos dias você tem?'));
        
        const days = (year*365) + (month*30) + day;
        
        console.log(`\ntotal de dias vividos foi de: ${days} dias vividos`);
          