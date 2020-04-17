import Server from './classes/server';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

// Declaracion de rutas
import router from './routes/router';
import users from './routes/user.routes';
import login from './routes/login.routes';

const server = Server.instance;

// BodyParser
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

// ANGULAR
server.app.use(express.static('public'));

// CORS
server.app.use(cors({ origin: true, credentials: true }));

// Rutas de servicios
server.app.use('/', router);
server.app.use('/', users);
server.app.use('/', login);
server.start(() => {
  console.log(`Servidor corriendo en el puerto ${server.port}`);
});
