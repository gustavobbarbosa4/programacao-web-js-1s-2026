function calcularIMC(peso, altura) {
    return peso / (altura*altura)
}

function categoriaIMC(calcularIMC) {
    if(calcularIMC < 18.5){
        return "Baixo peso"
    } else if (calcularIMC >= 18.5 && calcularIMC <= 24.9) {
        return "Peso normal"
    } else if (calcularIMC >= 25 && calcularIMC <= 29.9) {
        return "sobrepeso"
    } else if (calcularIMC >= 30 && calcularIMC <= 34.9) {
        return "Obesidade"
    } else {
        return "Obesidade extrema"
    }
 }

 let peso = 70
 let altura = 1.70

 let IMC = calcularIMC(peso, altura)
 console.log(categoriaIMC(IMC))
