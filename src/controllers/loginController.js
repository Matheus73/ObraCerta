const { response, request } = require("express")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const knex = require('../database/index.js');
const authServices = require('../services/authServices');
require('dotenv').config();

class loginController{
    async login(request, response) {
        const { senha, email } = request.body;

        const hash = await knex.select('hashSenha')
            .from('usuario')
            .where({ email: email })
            .first();

        if (!hash)
            return response.status(400).send({ error: 'Email inválido' });

        if (!await bcrypt.compare(senha, hash.hashSenha))
            return response.status(400).send({ error: 'Senha inválida' });

        const dados = await knex.select('*')
            .from('usuario')
            .where({ email: email })
            .first();
        
        delete dados.hashSenha;

        const token = await authServices.generateToken(dados);

        return response.send({dados,token});
    }
}

module.exports = new loginController();