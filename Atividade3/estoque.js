// Mantém a lista de produtos em memória enquanto a aplicação estiver rodando
let produtos = [];

function cadastrar_produto(id, nome, qtd) {
    let produto = {
        nome: nome,
        qtd: qtd
    };
    produtos.push(produto)
} 

function listar_produtos(){
    return produtos;
};

function remover_produtos(){

}

module.exports = {
    cadastrar_produto,
    listar_produtos
};