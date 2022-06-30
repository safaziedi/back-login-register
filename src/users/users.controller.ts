import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

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

  @Patch()
  update(@Body() todo: UpdateUserDto) {
    return this.todosService.update(todo);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.todosService.delete(id);
  }


}
