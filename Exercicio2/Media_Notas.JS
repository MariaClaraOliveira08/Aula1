const prompt = require('prompt-sync')();

let notas = parseFloat(prompt("Digite uma nota:"))

if (notas < 4){
    console.log("Reprovado!!!")
}

else if (notas > 4 && notas < 6){
    console.log("Recuperação!!!")
}

if (notas >= 6){
    console.log("Aprovado!!!")
}