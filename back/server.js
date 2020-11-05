const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// ROTAS
app.use('', require('./src/routes'));


app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`)
})