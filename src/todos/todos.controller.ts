import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodosService } from './todos.service';
@ApiTags('To Do List')
@Controller('/todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  // CRUD
  @Post()
  create(@Body() todo: CreateTodoDto, user : CreateUserDto) {
    return this.todosService.create(
      todo , user
    )
  }

  
  @Get()
  getAll() {
    return this.todosService.getAll();
  }

  @Patch()
  update(@Body() todo: UpdateTodoDto) {
    return this.todosService.update(todo);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    console.log('iciii');

    return this.todosService.delete(id);
  }
}
