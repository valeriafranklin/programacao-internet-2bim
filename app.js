//! Importar o express e instanciar ele:
const express = require('express');

//* Instanciamento do Express:
const app = express();

//! Definir a Engine do Projeto:
app.set('view engine', 'ejs');
app.set('views', './views');

//! Define a pasta public para conteúdo estático:
app.use(express.static('./public'));

//! Define que o app vai passar informações via Json:
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//! Faz a definição de uma seção no express:
//* Importa o módulo:
const session = require('express-session');

//* Define o Proxy como ativo:
app.set('trust proxy', 1);

//* Configura a sessão:
app.use(session({
    secret: 'c18e192c1f74e99262ebbc3f12f7505babc98542',
    resave: true,
    saveUninitialized: true,
    cookie: false
}));

//! Importar as rotas e configurar:
const routers = require('./routers/routers');
app.use(routers);

//! Definir a porta e iniciar o servidor:
const hostname = 'localhost';
const port = 3000;

//* Iniciar o servidor:
app.listen(port, ()=>{
    console.log(`Servidor iniciado em http://${hostname}:${port} (Clique Ctrl+C)`);
});