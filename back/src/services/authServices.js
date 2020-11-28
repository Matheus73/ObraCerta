require('dotenv').config({
    path: process.env.NODE_ENV ==  'test' || process.env.NODE_ENV == 'test ' ? '.env.test' : '.env'
});

const express = require("express");
const jwt = require('jsonwebtoken');

exports.generateToken = async (data) => {
    return jwt.sign({ data }, process.env.AU_HASH_KEY, { expiresIn: 86400 });
}

exports.decodeToken = async (authToken) => {
    const [, token] = authToken.split(" ");

    const data = await jwt.verify(token, process.env.AU_HASH_KEY);
    return data;
}

exports.middlewares = async function(req, res, next) {
    const token = req.headers.authorization;

    //! const [, token] = authToken.split(" ");
    console.log(token)

    if(!token){
        return res.status(401).json({
            message:'Acesso Restrito'
        });
    }

    await jwt.verify(token,process.env.AU_HASH_KEY,function(error, decoded){

        if(error){
            return res.status(401).json({
                message: 'Token inválido'
            });
        }

        req.body.idUsuario = decoded.data.idUsuario;
        next();
    })


}