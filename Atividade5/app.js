const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public"));

// Rota Raiz
app.get("/", (req, res) => {
    res.render("form", {erros: []});
});

// Rota de envio
app.post("/agendamento", (req, res) => {
    const dados = req.body;
    let erros = [];

    // Validação de campo obrigatório
    for (let campo in dados) {
        if (campo !== "observacao" && !dados[campo]) {
            erros.push(`O campo %{campo} é obrigatório`);
        }
    }

// Validação de data
const dataAtual = new Date()
const dataConsulta = new Date(dados.dataHora)

if (dataConsulta <= dataAtual) {
    erros.push("A data da consulta deve ser futura");
}

if (erros.length > 0) {
    return res.render("form", { erros })
}

res.render("resultado", { dados })
});

const port = 3000
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})