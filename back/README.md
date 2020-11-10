### Installing dependencies:

Run: `npm install --only=prod`

It's recommended to install **dotenv** as well: `npm install dotenv -D`.<br/>

If you dont want to install **dotenv**, go to the [knex configuration file](https://github.com/Matheus73/ObraCerta/blob/main/back/knexfile.js) and put your database info there.

### Database 

After connecting to the database run: `npx knex migrate:latest` and `npx knex seed:run`.

If everything gone right, you should be good to go :)

### Scripts

Run the server: `npm run start`

Run server with nodemon (if installed): `npm run dev`
