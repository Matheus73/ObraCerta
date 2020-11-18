const { response, request } = require("express")
const knex = require("../database/index.js")

module.exports = {
  async listUsers(request, response){
    const results = await Knex('usuario')

    return response.json(results);
  },
}