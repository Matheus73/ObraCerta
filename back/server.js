const express = require('express')
const PORT = process.env.PORT || 3000;

const app = express();

// ROTAS
app.use('', require('./src/routes'));


app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`)
})