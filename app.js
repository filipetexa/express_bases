const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const funcoes = require('./functions');

app.use(bodyParser.urlencoded({ extended: true }))
app.get('/produtos', function (req, res, next) {
    res.send(funcoes.getProdutos());
})


app.get('/produtos/:id', function (req, res) {
    res.send(funcoes.getProduto(req.params.id))
})

app.post('/produtos', function (req, res) {
    const produto = funcoes.postProduto({
        nome: req.body.nome,
        preco: req.body.preco
    });
    res.send(produto);
})
app.delete('/produtos/:id', function (req, res) {
    const produto = funcoes.deleteOne(req.params.id)
    res.send(produto)
})

app.put('/produtos/:id', function (req, res) {

    const produto = funcoes.upDateOne({
        id: parseInt(req.params.id),
        nome: req.body.nome,
        preco: req.body.preco
    }
    );
    res.send(produto)
})

app.listen(3000, () => {
    console.log('servidor rodando na porta 3000');
})



