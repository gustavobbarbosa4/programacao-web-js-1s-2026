function transporMatriz(A) {

    console.log("Matriz original:")
    console.log(A)

    let linhas = A.length
    let colunas = A[0].length

    let AT = []

    for (let j = 0; j < colunas; j++) {
        AT[j] = []

        for (let i = 0; i < linhas; i++) {
            AT[j][i] = A[i][j]
        }
    }

    console.log("Matriz transposta:")
    console.log(AT)
}

let A = [
    [1,2],
    [3,4],
    [5,6]
]

transporMatriz(A)