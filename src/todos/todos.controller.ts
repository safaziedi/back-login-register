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
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { JwtAuthGuard } from 'src/users/guards/jwt-guard.guard';
import { UserDecorator } from 'src/users/user.decorator';
import { User } from 'src/users/user.model';
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
  @UseGuards(JwtAuthGuard)
  getAll(
    @UserDecorator() user: User
  ) {
    return this.todosService.getAll(user);
  }

  @Patch()
  update(@Body() todo: UpdateTodoDto) {
    return this.todosService.update(todo);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.todosService.delete(id);
  }
}
