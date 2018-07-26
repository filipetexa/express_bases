const express = require('express');
const app = express();
const bodyParser = require('body-parser');

require('./functions');

app.get('/produtos', function (req, res){
    res.send({ nome: " Note Book", preco: 123.34})
})



app.listen(3000, () => {
    console.log('servidor rodando na porta 3000');
})



