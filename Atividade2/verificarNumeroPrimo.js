function verificarNumeroPrimo(numero) {
   eh_primo = false;
    if (numero <= 1) { // Verifica se o numero é menor ou igual a 1
        return false;
    } else if ((numero != 2) && (numero % 2 == 0)) { // Se o número for diferente de dois (único numero par e primo) e a divisao por 2 for resto 0 (é par), não é primo
    return false;
   }
    
   for (let i = 3; i < Math.sqrt(numero); i += 2) { // 3 é o novo ponto de partida, iteramos ele de 2 em 2 para verificar a divisão pelos números ímpares
    if (numero % i == 0) { // Se o resto da divisão pelo número ímpar for zero, também não é primo 
        return false;
    }
   }
   
   return true; // Se as outras condições não forem atendidas, é primo
}

console.log(verificarNumeroPrimo(0)); 
console.log(verificarNumeroPrimo(1));
console.log(verificarNumeroPrimo(2));
console.log(verificarNumeroPrimo(3));
console.log(verificarNumeroPrimo(7));
console.log(verificarNumeroPrimo(83));
console.log(verificarNumeroPrimo(100));
console.log(verificarNumeroPrimo(991));
console.log(verificarNumeroPrimo(104729));
console.log(verificarNumeroPrimo(14348907));