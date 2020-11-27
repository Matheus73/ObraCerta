//PACKAGES
const express = require('express')
const multer = require('multer');
const path = require('path')
const { v4:uuidv4 } = require('uuid');

//CONTROLLERS
const UserController = require('./controllers/UserController');
const testController = require('./controllers/testTempController.js');//temp
const loginController = require('./controllers/loginController');
const publicationController = require('./controllers/publicationController');
const rateController = require('./controllers/rateController')

//MIDDLEWARES
const authServices = require('./services/authServices');

const router = express.Router();

//upload define o destino da imagem e com qual nome ela deve ser armazenada
const upload = multer({ 
  storage: multer.diskStorage({
    dest: path.resolve(__dirname, '..', 'static', 'uploads'),
    destination: (req, file, callback) => {
      callback(null, path.resolve(__dirname, '..', 'static', 'uploads'));
    },
    filename(req, file, callback) {
      const fileName = `${uuidv4()}-${file.originalname}`;
      return callback(null, fileName);
    },
  }),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
  fileFilter: (req, file, callback) => {
    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
      'image/gif'
    ];

    if (allowedMimes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error("Tipo de arquivo inválido\nEnvie arquivos do tipo: png, pjpeg, jpeg ou gif"));
    }

  },
})

// Rotas para a pagina inicial da aplicação
router.get('/', (req, res) => res.send("hello"));
router.get('/list', testController.listUsers);//temp

// Rotas para o UserController
router.get('/registrar', UserController.list);
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