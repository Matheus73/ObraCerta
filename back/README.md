### Installing dependencies:

Run: `npm install --only=prod`

It's recommended to install **dotenv** as well: `npm install dotenv -D`.<br/>

If you dont want to install **dotenv**, go to the [knex configuration file](https://github.com/Matheus73/ObraCerta/blob/main/back/knexfile.js) and put your database info there.

### Database 

After connecting to the database run: `npx knex migrate:latest` and `npx knex seed:run`.

If everything gone right, you should be good to go :)

## Scripts

Run the server: `npm run start`

Run server with nodemon (if installed): `npm run dev`

Rodar os testes: `npm tests`


## Testando
Para testar deve-se seguir os seguintes passos:
1. primeiro deve-se instalar o Jest, supertest e cross-env em modo de desenvolvimento `npm i -D jest supertest cross-env`

2. Após isso crie um arquivo com o nome `.env.test`, lá copie as variáveis que estao no `.env` e por fim mude o valor da  variável `DB_DATABASE` no `.env.test` com o nome de um banco de dados de teste.

3. Crie no servidor o banco de testes com o mesmo nome contido em `DB_DATABASE`.

4. Por fim execute npm test. Isso fará com seja executado a suite de testes contidos em `./__tests__`

