//PACKAGES
const express = require('express')
const multer = require('multer');
const { v4:uuidv4 } = require('uuid');

//CONTROLLERS
const UserController = require('./controllers/UserController');
const testController = require('./controllers/testTempController.js');//temp
const loginController = require('./controllers/loginController');
const publicationController = require('./controllers/publicationController');

//MIDDLEWARES
const authServices = require('./services/authServices');

const router = express.Router();

//upload define o destino da imagem e com qual nome ela deve ser armazenada
const upload = multer({ 
  storage: multer.diskStorage({
    destination: './static/uploads/',
    filename(req, file, callback) {
      const fileName = `${uuidv4()}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
})

// Rotas para a pagina inicial da aplicação
router.get('/', (req, res) => res.send("hello"));
router.get('/list', testController.listUsers);//temp

// Rotas de cadastro e login de usuário
router.get('/registrar', UserController.list);
router.post('/registrar', UserController.store);

router.get('/login', (req, res) => res.send('Logar'));
router.post('/login', loginController.login);

router.post('/nova_publicacao', [authServices.middlewares, upload.any()], publicationController.store);
router.get('/publicacoes', authServices.middlewares, publicationController.list);
router.delete('/usuario/:idUsuario/publicacao/:idPublicacao', publicationController.delete)

//alterar e deletar usuarios
router.delete('/usuario/:idUsuario', UserController.delete)
router.put('/usuario/:idUsuario', UserController.update)

module.exports = router