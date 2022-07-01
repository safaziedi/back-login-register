import { Body, Controller, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { authDto } from './dto';
@ApiTags('authentication')
@Controller('auth')
export class AuthController {
    constructor(private authService : AuthService){}

    @Post('/signin')
    signinLocal(@Body() dto:authDto){
        return this.authService.signinLocal(dto)
    }

    @Post('/singup')
    signupLocal(@Body() dto:authDto){
        return this.authService.signupLocal(dto)
    }

    @Post('logout')
    async logoutLocal(@Res({ passthrough: true }) response: Response) {
      response.clearCookie('jwt');
  
      return {
        message: 'logged out successfully ',
      };
    }

}
