'use strict'

const express = require('express');
const compression = require('compression');
const app = express();
const port = process.env.PORT || 3000;
const APP_FOLDER = __dirname + '/public';

app.use(compression());
app.use(express.static(APP_FOLDER));

app.get('/', (req, res) => res.redirect('subastapp'));

app.get('/subastapp/*', (req, res) => {
    const pathFolder = `${APP_FOLDER}/subastapp/index.html`;
    res.sendFile(pathFolder);
});

app.listen(port, () => console.log(`Deploy success!!!: ${port}`));