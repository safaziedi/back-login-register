import mongoose, { Schema} from 'mongoose';
import { CreateUserDto } from 'src/users/dto/create-user.dto';


export const TodoSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref:"User"},
  /*
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Owner' })
owner: Owner;
  */ 
  description: { type: String},
  day: { type: String},
  reminder: { type: Boolean},
});

export interface Todo extends mongoose.Document {
  _id: string;
  user : CreateUserDto;
  description: string;
  day: string;
  reminder :boolean;
}