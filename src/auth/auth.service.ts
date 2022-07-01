import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { authDto } from './dto';


@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService : JwtService
        ) {}
    async signinLocal(dto: authDto){
        const user = await this.usersService.findbyemail(dto.email)

        if (!user) {
            throw new UnauthorizedException ("credentials incorecct")
          }

        if (user.password !== dto.password) {
            throw new UnauthorizedException ("credentials incorecct")
        }
        // we can return user but when we return a json web token "jwt.io" , more sec!
        //return user
        return this.signUser(user.id , user.email , 'user')
    }

    async signUser(userId : string , email : string ,type : string ){

        return this.jwtService.sign(
            {
                sub : userId ,
                email , 
                type : type ,
            }
        )
    }

    signupLocal(dto: authDto){
        //create new user with dto
        return this.usersService.create(dto)
    }


    
}
