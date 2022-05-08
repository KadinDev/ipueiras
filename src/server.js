const { urlencoded } = require('express');

const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');

const methodOverride = require('method-override');
const server = express();

server
.use(express.urlencoded({ extended: true }))
.use(express.static('public'))
.use(methodOverride('_method'))
.set('view engine', 'njk')

.use(routes); //rotas



nunjucks.configure( 'src/app/views', {
    express: server,
    autoescape: false,
    noCache: true,
} );

server.listen(4000, () => {
    console.log('Server Run');
})