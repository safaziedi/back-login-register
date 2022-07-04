import { Schema, Document } from 'mongoose';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UserSchema } from 'src/users/user.model';

export const TodoSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref:"User" },
  description: { type: String},
  day: { type: String},
  reminder: { type: Boolean},
});

export interface Todo extends Document {
  _id: string;
  user : CreateUserDto;
  description: string;
  day: string;
  reminder :boolean;
}