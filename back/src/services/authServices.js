require('dotenv').config();
const jwt = require('jsonwebtoken');

exports.generateToken = async (data) => {
    return jwt.sign({ data }, process.env.AU_HASH_KEY, { expiresIn: '86400' });
}

exports.decodeToken = async (token) => {
    const data = await jwt.verify(token, process.env.AU_HASH_KEY);
    return data;
}