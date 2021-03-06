import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TodosModule } from './todos/todos.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, 
            UsersModule ,
            TodosModule,
            MongooseModule.forRoot('mongodb+srv://dbUser:safaziadi07012001@cluster0.thbgv.mongodb.net/jwt?retryWrites=true&w=majority'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}