const express = require('express');
const routes = express.Router();
const multer = require('../app/middlewares/multer');

const SessionController = require('../app/controllers/SessionController');
const UserController = require('../app/controllers/UserController');

// LOGIN
routes.get('/login', SessionController.loginForm );

// Register
routes.get('/register', UserController.registerForm);

// Cadastro de Users
routes.post('/register', multer.array('avatar', 4), UserController.post);



/* OBS: como foi congigurada para usar no index o routes.use('/users'
estou passando somente o /:id.
e vai estar em /users/:id    <-
*/
routes.get('/:id', UserController.show );

module.exports = routes;