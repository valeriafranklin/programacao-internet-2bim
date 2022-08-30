//! Importar o Router e instancia:
const { Router } = require('express');
const routers = new Router();

//! Importa os Controllers:
//* Home Controller:
const Home = require('../controller/homeController');
//* SessionController:
const Session = require('../controller/sessionController');

//! Importa o middleware:
const auth = require('../middleware/auth');

//! Definir as nossas rotas:
//* Definir rota Index:
routers.get('/', Home.index);

//* Definir rota Login:
routers.get('/login', Session.home);

//* Define a rota de Logar:
routers.post('/logar', Session.logar);

//* Define a rota de Home:
routers.get('/home', auth, Home.home);

//* Define a rota de Logout:
routers.get('/logout', Session.logout);

//! Exportar as rotas:
module.exports = routers;