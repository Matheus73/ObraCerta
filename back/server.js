const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', require('./src/routes/index'));

app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`)
})