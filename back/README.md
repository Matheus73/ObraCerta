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

## configurando o .env

Colocar as seguintes variáveis de ambiente para o .env

Configurações do banco de dados
`DB_DATABASE = obra_certa_test`
`DB_USER= postgres`
`DB_CLIENT= postgresql`
`DB_PASSWORD = Samuel09`
`DB_HOST = 127.0.0.1`

`AU_HASH_KEY = 2f4a5a718458028592d658b14ccab5fd`

MULTER_CONFIG deve ser colocado como `local` para desenvolvimento ou `s3` para produção
`MULTER_CONFIG=local`

`APP_URL=http://localhost:3001`

Configurações para o AWS
`AWS_ACCESS_KEY_ID=AKIA2ELC2GHAG5WW7JEK`
`AWS_SECRET_ACCESS_KEY=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`
`AWS_DEFAULT_REGION=us-east-1`

