const process = require('process');

require('dotenv').config({
  path: process.env.NODE_ENV ==  'test' ? '.env.test' : '.env'
});

const express = require('express')
const path = require('path');
const cors = require('cors');

const app = express();

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", '*');
    // res.header("Access-Control-Allow-Headers", 'Content-Type');
    app.use(cors());
    next();
});

// ROTAS
app.use(express.json());
app.use('', require('./routes'));
app.use('/files', express.static(path.resolve(__dirname, '..',  'static', 'uploads')));

module.exports = app;