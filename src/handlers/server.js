require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const server = require('../../src/configs/server.json');
const definitions = require('../configs/definitions.json');

const folders = {
    public: path.join(process.cwd(), 'public'),
    views: path.join(process.cwd(), 'public', 'views')
};

definitions.folders = folders;

app.set('view engine', 'ejs');
app.use(express.static(folders.public));
app.use(session({secret: process.env.SECRET_SESSION_KEY, resave: true, saveUninitialized: true}));
app.use(express.urlencoded({extended: true}));


//Rotas
app.use('/', require('../routes/home.js'));
app.use('/item', require('../routes/item.js'));

app.listen(server.port, (e) => !!e ? console.error('[SV] - Erro ao ligar o servidor: ', e) : console.log('[SV] - Servidor ligado na porta', server.port))