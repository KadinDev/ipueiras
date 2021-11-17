const express = require('express');
const routes = express.Router();

const HomeController = require('../app/controllers/HomeController');
const users = require('./users');

// HOME
routes.get('/', HomeController.landingPage );
routes.get('/home', HomeController.index );

// USERS CONTROLLER
// /users é só pra mim não precisar colocar o /users na frente
routes.use('/users', users );

module.exports = routes;