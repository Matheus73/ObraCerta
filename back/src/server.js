const express = require('express')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;

const app = express();

// ROTAS
app.use(bodyParser.json());
app.use(express.json());
app.use('', require('./routes'));


app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`)
})