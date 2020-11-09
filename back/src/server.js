const express = require('express')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json())
// ROTAS
app.use('', require('./routes'));


app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`)
})