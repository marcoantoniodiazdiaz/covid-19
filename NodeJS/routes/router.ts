import { Router, Request, Response } from 'express';
import Server from '../classes/server';
import { usuariosConectados } from '../sockets/sockets';

const app = Router();

export { app };

app.get('/mensajes', (req: Request, res: Response) => {
  res.json({
    ok: true,
    mensaje: 'Todo esta bien!!'
  });
});

app.post('/mensajes', (req: Request, res: Response) => {
  const body = req.body.body;
  const from = req.body.from;

  const server = Server.instance;

  const payload = {
    from,
    body
  };

  server.io.emit('newMessages', payload);

  res.json({
    ok: true,
    body,
    from
  });
});

app.post('/mensajes/:id', (req: Request, res: Response) => {
  const body = req.body.body;
  const from = req.body.from;
  const id = req.params.id;

  const server = Server.instance;

  const payload = {
    from,
    body
  };

  server.io.in(id).emit('private-message', payload);

  res.json({
    ok: true,
    body,
    from,
    id
  });
});

app.get('/usuarios', (req: Request, res: Response) => {
  const server = Server.instance;

  server.io.clients((err: any, clients: string) => {
    if (err) {
      return res.json({
        ok: false,
        err
      });
    }

    res.json({
      ok: true,
      clients
    });
  });
});

app.get('/status', (req: Request, res: Response) => {
  res.json({
    ok: true,
    status: 'RUNNING'
  });
});

app.get('/usuarios/inf', (req: Request, res: Response) => {
  const server = Server.instance;

  usuariosConectados;

  res.json({
    ok: true,
    clients: usuariosConectados.getUsers()
  });
});

export default app;
