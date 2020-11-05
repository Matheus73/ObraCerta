const express = require('express');
const router =  new express.Router();

// Rotas para a pagina inicial da aplicação
router.get('/', (req, res) => res.send("hello"))

router.get('/registrar', (req, res) => res.send("Registrar"));
router.post('/registrar', (req, res) => res.send("Registrar"));

router.get('/login', (req, res) => res.send('Logar'));


module.exports = router;