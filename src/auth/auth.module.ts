import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ UsersModule,
    JwtModule.register({
      secret : 'super-secret-cat'
    }),
    HttpModule
   ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
