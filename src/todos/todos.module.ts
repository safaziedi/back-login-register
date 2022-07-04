import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from 'src/users/users.module';
import { TodoSchema} from './todo.model';
import { TodosController} from './todos.controller';
import { TodosService } from './todos.service';

@Module({
  imports :[
    MongooseModule.forFeature([
      {
        name :'Todo' ,
        schema : TodoSchema ,
      }]
    ),HttpModule , UsersModule
  ],
  controllers: [TodosController],
  providers: [TodosService],
  exports:[TodosService]
})
export class TodosModule {}
