const express = require('express')
const app = express();
const port =  3000;

// define uma rota basica que respondi arequisição GET
app.get('/', (req, res) => {
    res.send('Olá, Mundo, bem-vindo ao servidor Express!');
});

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});