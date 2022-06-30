import { Injectable, NotFoundException } from '@nestjs/common';
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

    
      async getUserById(prodId: string) {
        const user = await this.UserModel.findById({ _id: prodId }).exec();
        if (!user) {
          throw new NotFoundException("user not found");
        }
        return user
      }
    
      async findbyemail(email : string ){
        const user = await this.UserModel.findOne({email : email}).exec()
        /*if (!user) {
          throw new NotFoundException("user not found");
        }*/
        return  user
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
