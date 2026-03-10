// function - Bloco de código que pode ser acionado 
// DRY - Don`t repeat yourself
function imprimirOlaMundo(){
    return console.log("Olá, mundo!")
}

imprimirOlaMundo() // Chamada da função

function somar(A, B) {
    let soma = A + B
    console.log (`${A}+${B}=${soma}`)
}

somar(2,5)
somar(5,9)
somar(7,3)

// Estruturas de repetição
let i
for (i=0;i <= 10; i++) {
    process.stdout.write(i + ", ")
} 
console.log("\n" + i) // i finaliza como 11 porque foi quando ele não atendeu mais a condição do for, é maior que o 10

// Estrutura condicional
let idade = 18
if (idade >= 18) {
    console.log("Maior de idade!")
} else {
    console.log("Menor de idade")
}




