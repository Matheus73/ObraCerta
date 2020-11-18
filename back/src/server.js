const express = require('express')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001;

const cors = require('cors');

const app = express();

app.use(bodyParser.json())

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "http://localhost");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", 'Content-Type');
    app.use(cors());
    next();
});


// ROTAS
app.use('', require('./routes'));


app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`)
})