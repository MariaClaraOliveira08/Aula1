const prompt = require('prompt-sync')();

let tamanho = parseFloat(prompt("Digite o tamanho da sua lista:"))

let array = []


for (let i = 0; i < tamanho; i++) {
    let num = parseFloat(prompt("Digite um numero:"))
    array.push(num)
    
}
array.forEach((numero) => {
    console.log(array);
});