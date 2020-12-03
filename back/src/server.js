const  app = require('./app');
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Running in ${process.env.MULTER_CONFIG}`)
  console.log(`Listening to http://localhost:${PORT}`)
})
