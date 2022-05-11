const express = require('express');

const path = require('path');

const app = express();

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/index.html'))
});

app.use(router);

app.use(express.static(__dirname + '/assets')); //Código para aceder os arquivos estáticos.

app.listen(process.env.PORT || 3333, () => {
    console.log('SERVIDOR RODANDO !!!!!!')
});