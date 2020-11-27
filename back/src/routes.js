//PACKAGES
const express = require('express');


//CONTROLLERS
const UserController = require('./controllers/UserController');
const loginController = require('./controllers/loginController');
const publicationController = require('./controllers/publicationController');
const rateController = require('./controllers/rateController')

//MIDDLEWARES
const authServices = require('./services/authServices');
const upload = require('./config/multer');

const router = express.Router();


// Rotas para a pagina inicial da aplicação
router.get('/', (req, res) => res.send("hello"));

// Rotas para o UserController
router.get('/search', UserController.list);
router.post('/registrar', UserController.store);
router.delete('/usuario/:idUsuario', UserController.delete)
router.put('/usuario/:idUsuario', UserController.update)
router.post('/alteraSenha', UserController.updatePassword);

router.get('/login', (req, res) => res.send('Logar'));
router.post('/login', loginController.login);

router.post('/nova_publicacao', [authServices.middlewares, upload.any()], publicationController.store);
router.get('/:idUsuario/publicacoes', authServices.middlewares, publicationController.list);
router.delete('/usuario/:idUsuario/publicacao/:idPublicacao', authServices.middlewares, publicationController.delete)

router.post('/:idUsuario/avaliar', authServices.middlewares, rateController.store);

module.exports = router