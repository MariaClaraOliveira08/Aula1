const prompt = require('prompt-sync')();

let celsius = parseFloat(prompt("Digite os celsius:"))
//Cálculo
fahrenheit = (celsius * 9 / 5) + 32;
console.log("O grau em fahrenheit é:");
console.log(fahrenheit);