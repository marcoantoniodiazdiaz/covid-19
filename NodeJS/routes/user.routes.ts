import { Request, Response } from 'express';
import UserSchema from '../classes/interfaces/user.interface';
import { MongoError } from 'mongodb';
import {
  verificaToken,
  verificaAdmin_Role
} from '../middlewares/authentication';
import * as _ from 'underscore';
import bcrypt from 'bcrypt';

import { app } from './router';

app.get('/users', [verificaToken], (req: Request, res: Response) => {
  UserSchema.find().sort({ firstName: 1 }).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err
      });
    }

    res.json({
      ok: true,
      data
    });
  });
});

app.get('/users/:id', [verificaToken], (req: Request, res: Response) => {
  let id = req.params.id;

  UserSchema.findById(id).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err
      });
    }

    res.json({
      ok: true,
      data
    });
  });
});

app.get('/users/firstName/:firstName', [verificaToken], (req: Request, res: Response) => {
  let firstName = req.params.firstName;
  let regex = new RegExp(firstName);

  UserSchema.find({
    firstName: {
      $regex: regex
    }
  })
    .sort({
      firstName: 1
    })
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err
        });
      }

      res.json({
        ok: true,
        data
      });
    });
}
);

app.post('/users', (req: Request, res: Response) => {
  let body = req.body;

  const user = new UserSchema({
    firstName: body.firstName,
    location: body.location,
    email: body.email,
    activated: body.activated,
    photo: body.photo,
    signInDate: body.signInDate,
    google: body.google,
    facebook: body.facebook,
    password: body.password,
  });

  user.password = bcrypt.hashSync(user.password, 15);

  UserSchema.create(user, (err: MongoError, data: any) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err
      });
    }

    res.json({
      ok: true,
      data
    });
  });
});

// Update User
app.put('/users/:id', [verificaToken], (req: Request, res: Response) => {
  let id = req.params.id;
  let body = _.pick(req.body, [
    'firstName',
    'location',
    'activated',
    'photo',
    'google',
    'facebook',
    'password',
  ]);

  UserSchema.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, data) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err
      });
    }

    res.json({
      ok: true,
      data: data
    });
  });
});

// Dalete User
app.delete('/users/:id', [verificaToken, verificaAdmin_Role], (req: Request, res: Response) => {
  let id = req.params.id;

  UserSchema.findById({ id }).remove().exec((err, data) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err
      });
    }

    res.json({
      ok: true,
      data
    });
  });
});

export default app;
