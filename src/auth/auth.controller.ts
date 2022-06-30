import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService : AuthService){}

    @Post()
    signinLocal(){
        return this.authService.signinLocal()
    }
    @Post()
    signupLocal(){
        return this.authService.signupLocal()
    }

}
