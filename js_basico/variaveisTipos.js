// Strings 
let nome = "Gustavo" // let permite que o valor da variável seja alterado 
const sobrenome = 'Barbosa' // const não permite alteração de valor
nome = "João" // variavel teve seu valor alterado
// sobrenome = 'Paulino'  <=== dá erro, tentando alterar o valor de uma constante (TypeError)
let templateString = `O meu nome é ${nome} ${sobrenome}\n`;
console.log(templateString)

// Number - não diferencia por ponto flutuante
let A = 2
let B = 5.56
let C = -3.14
const PI = 3.14

let potencia = A ** C

console.log(typeof(A)) // Typeof() mostra o tipo de dado
console.log(`${A}^${C} = ${potencia}\n`)

// boolean
let verdadeiro = true
let falso = false

console.log(typeof(verdadeiro))

// Operadores lógicos 
let E = verdadeiro && falso // Retorna falso (Os dois precisam ser verdadeiros)
let Ou = verdadeiro || falso // Retorna verdadeiro (Apenas um precisa ser verdadeiro)
console.log(E)
console.log(Ou)

let maiorQue = B > A // Retorna true, pois B é maior que A
console.log(maiorQue)

let numero = 4 // Operador de igualdade
if(numero % 2 == 0) {
    console.log(`\n${numero} é par!\n`)
} else {
    console.log(`\n${numero} é ímpar!\n`)
}

// Arrays 
let numeros = [1, 3.14, -7, 99, 505.67] // Declaração de um Array
console.log(numeros[3]) // Podemos acessar uma posição indicando seu índice, começa no 0

for (let i = 0; i < numeros.length; i++) {
    console.log(`${numeros[i]}, `)
}
console.log(typeof(numeros))

// Object 
let pessoa = {
    nome: 'Jonas',
    cpf: 123,
    telefones: ([61999999999], [61988888888])
};
console.log(pessoa)
console.log(`pessoa.nome: ${pessoa.nome}`);

 