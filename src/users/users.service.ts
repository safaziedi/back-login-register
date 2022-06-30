import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.model';

@Injectable()
export class UsersService {

    
  constructor(
    @InjectModel('User') private UserModel: Model<User>,
  ) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = new this.UserModel(createUserDto);
        return createdUser.save();
      }

    async getAll(): Promise<User[]> {
        return this.UserModel.find().exec();
      }

      async update(todo: UpdateUserDto) {
        const updateUser = new this.UserModel(todo);
        return updateUser.save();
      }
    

      async delete(prodId: string) {
        const result = await this.UserModel.deleteOne({ _id: prodId }).exec();
      }
    
}
