import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt'){

    constructor() {
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          ignoreExpiration: true, //ba3d :dev traja3ha false
          secretOrKey: 'super-secret-cat' ,
        });
      }
    
      async validate(payload: any) {
        return payload
        
        //return { userId: payload.sub, username: payload.username };
      }
}