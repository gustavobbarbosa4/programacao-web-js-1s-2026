// Atividade em sala
function verificarParidade(numero) {
    if (numero % 2 == 0){
        return true
    } else {
        return false
    }
}

function apresentarMensagemParidade(verificarParidade){
    if (verificarParidade == true) {
        return console.log("É Par!")
    } else {
        return console.log("É ímpar!")
    }
}

let num = 8
let res = verificarParidade(num)
apresentarMensagemParidade(res)