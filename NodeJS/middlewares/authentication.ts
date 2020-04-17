import * as jwt from 'jsonwebtoken';
import { SEED } from '../global/environment';
import * as HttpStatus from 'http-status-codes';

export const verificaToken = (req: any, res: any, next: Function) => {
  const token: string = req.get('Authentication')!;

  jwt.verify(token, SEED, (err: Error, decoded: any) => {
    if (err) {
      res;
      return res.status(HttpStatus.UNAUTHORIZED).json({
        ok: false,
        err: {
          // message: 'Token no válido'
          message: 'Acceso denegado a COVID-19 Server'
        }
      });
    }

    req.usuario = decoded.usuario;
    next();
  });
};

export const verificaAdmin_Role = (req: any, res: any, next: Function) => {
  const usuario = req.usuario;

  if (usuario.role === 'ADMIN_ROLE') {
    next();
  } else {
    return res.json({
      ok: false,
      err: {
        message: 'El usuario no es administrador'
      }
    });
  }
};
