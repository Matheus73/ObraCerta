//PACKAGES
const express = require('express');


//CONTROLLERS
const UserController = require('./controllers/UserController');
const loginController = require('./controllers/loginController');
const publicationController = require('./controllers/publicationController');
const rateController = require('./controllers/rateController')
const commentController = require('./controllers/commentController')

//MIDDLEWARES
const authServices = require('./services/authServices');
const upload = require('./config/multer');

const router = express.Router();


// Rotas para a pagina inicial da aplicação
router.get('/', (req, res) => res.send("hello"));

// Rotas para o UserController
router.get('/perfil/:idUsuario', UserController.one)
router.get('/search', UserController.list);
router.post('/registrar', UserController.store);
router.delete('/usuario/:idUsuario', UserController.delete)
router.put('/usuario/:idUsuario', [authServices.middlewares, upload.array('imagemPerfil', 1)], UserController.update)
router.post('/alteraSenha', UserController.updatePassword);

//Rotas para o login
router.get('/login', (req, res) => res.send('Logar'));
router.post('/login', loginController.login);

//rotas para o publicationController
router.post('/nova_publicacao', [authServices.middlewares, upload.any()], publicationController.store);
router.get('/:idUsuario/publicacoes', publicationController.list);
router.delete('/usuario/:idUsuario/publicacao/:idPublicacao', authServices.middlewares, publicationController.delete)

//Rotas para avaliação
router.post('/:idUsuario/avaliar', authServices.middlewares, rateController.store);
router.put('/:idUsuario/avaliar/update', authServices.middlewares, rateController.update);
router.get('/:idUsuario/avaliar/list', rateController.list);

//Rotas para comentarios
router.put('/:idUsuario/comentar',  authServices.middlewares, commentController.create);
router.get('/comentarios/:idUsuario', commentController.list)

module.exports = router