//dentro da pasta de trabalho: npm init e npm i express@4.21.2

const express = require('express'); 
const estoque = require('./estoque');
const { log } = require('node:console');
const app     = express();
const port    = 8080;

app.get('/', (req, res)=>{
    let msg = "<h1>Rotas disponíveis</h1>";
    msg     += "<p>Para cadastrar produtos: /api/cadastrar/:id/:nome/:qtd</p>" 
    msg     += "<p>Para listar os produtos: /api/listar</p>" 
    msg     += "<p>Para remover um produto: /api/remover/:id</p>" 
    msg     += "<p>Para editar os produtos: /api/editar/:id/:qtd</p>" 
    res.send(msg)
});

app.get('/api/cadastrar/:id/:nome/:qtd', (req, res)=>{
    let id = parseInt(req.params.id);
    let nome = req.params.nome;
    let qtd = parseInt(req.params.qtd);
    estoque.cadastrar_produto(id, nome, qtd);
    res.send("Produto cadastrado com sucesso");
});

app.get('/api/listar', (req, res)=>{
    res.send(estoque.listar_produtos())
});

app.get('/api/remover/:id', (req, res)=>{
    let id = parseInt(req.params.id);
    estoque.remover_produtos(id);
    res.send("Produto removido com sucesso");
});

app.get('/api/editar/:id/:qtd', (req, res)=>{
    let id = parseInt(req.params.id);
    let qtd = parseInt(req.params.qtd);
    estoque.editar_produto(id, qtd);
    res.send("Produto editado com sucesso");
});

app.listen(port, ()=>{
    console.log('app rodando na porta ' + port);
});