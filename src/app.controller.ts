import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { GetCurretUserById } from './users/get-user-by-id.decorator';
import { JwtAuthGuard } from './users/guards/jwt-guard.guard';

@ApiTags('protected part')
@Controller('/protected')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // we will protect our hello with passport-jwt (famma passport google ..ect) with jwt.strategy.ts
  @UseGuards(JwtAuthGuard)
  @Get( )
  getHello(
    @GetCurretUserById() userId: string
  ): string {
    return this.appService.getHello(userId);
  }
}
