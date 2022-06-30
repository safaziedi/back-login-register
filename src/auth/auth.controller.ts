import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { authDto } from './dto';

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

}
