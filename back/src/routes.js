import { Router } from 'express';

import UserController from './UserController';

const router =  new Router();

// Rotas para a pagina inicial da aplicação
router.get('/', (req, res) => res.send("hello"))

// Rotas de cadastro e login de usuário
router.get('/registrar', (req, res) => res.send("Registrar"));
router.post('/registrar', UserController.store);

router.get('/login', (req, res) => res.send('Logar'));

export default router