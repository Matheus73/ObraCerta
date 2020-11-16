const express = require('express')
const router = express.Router();
const UserController = require('./controllers/UserController')
const testController = require('./controllers/testTempController.js');//temp
const loginController = require('./controllers/loginController');
const authServices = require('./services/authServices');

// Rotas para a pagina inicial da aplicação
router.get('/', (req, res) => res.send("hello"));
router.get('/list', authServices.middlewares,testController.listUsers);//temp

// Rotas de cadastro e login de usuário
router.get('/registrar', (req, res) => res.send("Registrar"));
router.post('/registrar', UserController.store);

router.get('/login', (req, res) => res.send('Logar'));
router.post('/login', loginController.login);


module.exports = router