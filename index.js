const express = require('express');

const PORT = 3010;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
    res.send('Pronto! Sua aplicação já está no ar rodando em um Container.');
});

app.listen(PORT, HOST);