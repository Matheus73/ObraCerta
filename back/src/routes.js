const express = require('express')
const router = express.Router();
const UserController = require('./controllers/UserController')
const testController = require('./controllers/testTempController.js')//temp

// Rotas para a pagina inicial da aplicação
router.get('/', (req, res) => res.send("hello"));
router.get('/list', testController.listUsers);//temp

// Rotas de cadastro e login de usuário
router.get('/registrar', (req, res) => res.send("Registrar"));
router.post('/registrar', UserController.store);

router.get('/login', (req, res) => res.send('Logar'));

module.exports = router