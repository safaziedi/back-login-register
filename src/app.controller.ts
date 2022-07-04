import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { UserDecorator } from './users/user.decorator';
import { JwtAuthGuard } from './users/guards/jwt-guard.guard';
import { User } from './users/user.model';

@ApiTags('protected part')
@Controller('/protected')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(JwtAuthGuard)
  @Get( )
  getHello(
    @UserDecorator() user: User
  ) {
    return this.appService.getHello(user);
  }
}
