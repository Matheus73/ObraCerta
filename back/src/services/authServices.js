const express = require("express");
require('dotenv').config();
const jwt = require('jsonwebtoken');

exports.generateToken = async (data) => {
    return jwt.sign({ data }, process.env.AU_HASH_KEY, { expiresIn: '86400' });
}

exports.decodeToken = async (token) => {
    const data = await jwt.verify(token, process.env.AU_HASH_KEY);
    return data;
}

exports.middlewares = function(req, res, next){
    const token = req.body.token;

    if(!token){
        res.status(401).json({
            message:'Acesso Restrito'
        });
    }
    else{
        jwt.verify(token,process.env.AU_HASH_KEY,function(error, decoded){
            if(error){
                res.status(401).json({
                    message: 'Token inválido'
                });
            }
            else{
                next();
            }
        })
    }

}