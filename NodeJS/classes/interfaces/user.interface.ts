import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  firstName: string
  location: string
  activated: boolean
  photo: string
  signInDate: string
  google: boolean
  facebook: boolean
  email: string
  password: string
  role: string
}

const UserSchema: Schema = new Schema({
  firstName: {
    type: String,
    required: [true, 'El campo nombre es requerido']
  },
  location: {
    type: String,
    default: null,
  },
  activated: {
    type: Boolean,
    default: true,
  },
  photo: {
    type: String,
    default: null,
  },
  signInDate: {
    type: String,
    default: new Date().toISOString().toString()
  },
  google: {
    type: Boolean,
    default: false,
  },
  facebook: {
    type: Boolean,
    default: false,
  },
  email: {
    type: String,
    required: [true, 'El campo email es requerido'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'El campo contraseña es requerido']
  },
  role: {
    type: String,
    default: 'USER_ROLE'
  },
});

// Export the model and return your IUser interface
export default mongoose.model<IUser>('Users', UserSchema);
