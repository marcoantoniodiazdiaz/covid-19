import express from 'express';
import { SERVER_PORT, URL_DB } from '../global/environment';
import socketIO from 'socket.io';
import http from 'http';
import * as socket from '../sockets/sockets';
import mongoose from 'mongoose';
import { MongoError } from 'mongodb';

export default class Server {
  private static _instance: Server;
  public app: express.Application;
  public port: number;

  public io: socketIO.Server;
  private httpServer: http.Server;

  private constructor() {
    this.app = express();
    this.port = SERVER_PORT;

    this.httpServer = new http.Server(this.app);
    this.io = socketIO(this.httpServer);
    this.escucharSockets();
    this.mongoConnect();
  }

  public static get instance() {
    return this._instance || (this._instance = new this());
  }

  private escucharSockets() {
    console.log('\x1b[36m', "SOCKET STATE: OK", '\x1b[0m');

    this.io.on('connection', cliente => {
      console.log('\x1b[36m', "NUEVO CLIENTE", '\x1b[0m');
      // Conectar Cliente
      socket.conectarCliente(cliente);
      // Mensajes
      socket.mensaje(cliente, this.io);
      // Desconetar
      socket.desconectar(cliente);
      // Configurar Usuario
      socket.set_usuario(cliente, this.io);

      socket.newCliente(cliente, this.io);
    });
  }

  private mongoConnect() {
    mongoose.connect('mongodb://localhost:27017/stayathome',
      //'mongodb+srv://marco_diaz:pataPON3@cluster0-jm5fl.mongodb.net/sautdiaz?retryWrites=true&w=majority',
      //URL_DB,
      { useNewUrlParser: true, useCreateIndex: true },
      (err: MongoError) => {
        if (err) throw err;
        // console.log('ATLAS conectado.');
      }
    );
  }

  start(callback: Function) {
    this.httpServer.listen(this.port, callback);
  }
}
