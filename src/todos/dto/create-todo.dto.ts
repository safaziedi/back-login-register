import { ApiProperty } from "@nestjs/swagger";
import { CreateUserDto } from "src/users/dto/create-user.dto";

export class CreateTodoDto  {

    @ApiProperty()
    user : CreateUserDto  ;

    @ApiProperty()
    description: string;

    @ApiProperty()
    day: string;

    @ApiProperty()
    reminder: boolean;
}

