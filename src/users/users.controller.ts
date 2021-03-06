import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private todosService: UsersService) {}

  // CRUD
  @Post()
  create(@Body() todo: CreateUserDto) {
    return this.todosService.create(todo);
  }

  @Get()
  getAll() {
    return this.todosService.getAll();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.todosService.getUserById(id);
  }

  @Get('/searchbymail/:email')
  getUserbyemail(@Param('email') email: string) {
    const userpass = this.todosService.findbyemail(email);
    return userpass;
  }

  @Patch()
  update(@Body() todo: UpdateUserDto) {
    return this.todosService.update(todo);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.todosService.delete(id);
  }


}
