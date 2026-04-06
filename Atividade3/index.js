//dentro da pasta de trabalho: npm init e npm i express@4.21.2

const express = require('express'); 
const estoque = require('./estoque');
const { log } = require('node:console');
const app     = express();
const port    = 8080;

app.get('/', (req, res)=>{
    let msg = "<h1>Rotas disponíveis</h1>";
    msg     += "<p>Para cadastrar produtos: /api/cadastrar/:nome/:qtd</p>" 
    msg     += "<p>Para listar os produtos: /api/listar</p>" 
    res.send(msg)
});

app.get('/api/cadastrar/:nome/:qtd', (req, res)=>{
    let nome = req.params.nome;
    let qtd = req.params.qtd;
    estoque.cadastrar_produto(nome, qtd);
    res.send("Produto cadastrado com sucesso");
})

app.get('/api/listar', (req, res)=>{
    res.send(estoque.listar_produtos())
})

app.listen(port, ()=>{
    console.log('app rodando na porta ' + port);
});