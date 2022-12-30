import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers(): any {
    return this.usersService.findAll();
  }
  @Get(":id")
  getUserById(@Param("id") id: string): any {
    //? TODO: Auto parse id
    return this.usersService.findById(Number(id));
  }

  @Post()
  createUser(@Body() body: CreateUserDTO): any {
    return this.usersService.createUser(body);
  }
}
