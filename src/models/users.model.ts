import { model, Schema, Document } from 'mongoose';
import { User } from '@interfaces/users.interface';

const UserSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  contact_number: {
    type: String,
    required: true,
  },
  is_active: {
    type: Number,
    required: true,
    default: 0,
  },
});

export const UserModel = model<User & Document>('User', UserSchema);
