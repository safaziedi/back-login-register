import { Schema, Document } from 'mongoose';

export const UserSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export interface User extends Document {
  _id: string;
  email: string;
  password: string;
}



