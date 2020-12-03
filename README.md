# ObraCerta

## Justificativa do projeto:
Com o aumento da construção civil depois da crise desencadeada pela pandemia de Coronavirus tornou-se necessário novos métodos de se encontrar mão de obra especializada na área, nosso projeto visa atender a esse alta demanda de obtenção de informação a cerca de profissionais do ramo.
Acreditamos que ao disponibilizarmos um sistema onde esses profissionais possam se cadastrar e mostrar suas capacidades tornará fácil por parte dos empregadores encontrar os mesmos de forma mais simples.

## Objetivos do projeto:
Desenvolver um aplicativo que visa beneficiar tanto empresas e empreendedores da área de construção civil a encontrar mão de obra especializada na área, como a esses profissionais de disponibilizar em uma plataforma especializada seu perfil e amostras de trabalho realizado, com indicador de localidade em relação ao pesquisador mostrando suas referências e amostras de projetos realizados por meio de imagens e depoimentos de ex contratantes.

## Finalidade do projeto:
Facilitar o encontro de empregadores e profissionais da área da construção civil a entrarem em contato um com o outro de maneira mais simplificada e auxiliar a esses profissionais que muitas vezes trabalham por projeto a migrarem para novos sem que haja muito tempo entre os trabalhos.

<br>

# Documentação Obra Certa
```https://sayuck.github.io/ObraCerta/```

# Ambientes

### Produção
Para acessar o ambiente de produção, utilize o link a seguir:

```https://obracerta-front.herokuapp.com/```


# Configurando Ambiente de Desenvolvimento
Abaixo temos instruções de como configurar o ambiente de forma rápida.

#### 1. Clone esse repositório
#### 2. Entre na pasta do Obra Certa
#### 3. Entre na pasta front
#### 4. Dê os seguintes comandos

``` 
yarn install
yarn start
```

#### 5. Abra outro terminal e volte uma pasta
#### 6. Entre na pasta back
#### 7. Dê os seguintes comandos

``` 
npm install
```
#### 8. Com o banco de dados já instalado crie o arquivo com nome .env e as seguintes configurações nele (exemplo utilizando postgreSQL): 

``` 
DB_DATABASE = obracerta
DB_CLIENT= postgresql
DB_USER= <usuario>
DB_PASSWORD = <senha>
DB_HOST = 127.0.0.1
APP_URL = http://localhost:3001

AU_HASH_KEY = <hash do token de autenticação>

MULTER_CONFIG= local (ou s3 configurando as chaves abaixo da AWS)

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=
```
#### 9. Rodar as migrações do banco com o seguinte comando:
``` 
npx knex migrate:latest
```
#### 10. Popule o banco (caso queira)
```
npx knex seed:run
```

#### 11. Inicie o servidor do back

```
npm run start
```
#### 12. Agora pode acessar o localhost:3000
