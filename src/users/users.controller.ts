import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateUserDTO } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";
import { UsersService } from "./users.service";

@ApiTags("users")
@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers(): User[] {
    return this.usersService.findAll();
  }
  @Get(":id")
  getUserById(@Param("id") id: string): User {
    //? TODO: Auto parse id
    return this.usersService.findById(Number(id));
  }

  @Post()
  createUser(@Body() body: CreateUserDTO): User {
    return this.usersService.createUser(body);
  }
}
