import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(
    userId : string
    ): string {
    
    return 'Hello World!';
  }
}
