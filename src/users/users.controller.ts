import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from "@nestjs/common";
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from "@nestjs/swagger";
import { CreateUserDTO } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";
import { UsersService } from "./users.service";

@ApiTags("users")
@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOkResponse({ type: User, isArray: true })
  @Get()
  getUsers(): User[] {
    return this.usersService.findAll();
  }

  @ApiOkResponse({ type: User })
  @ApiNotFoundResponse()
  @Get(":id")
  getUserById(@Param("id") id: string): User {
    //? TODO: Auto parse id

    const user = this.usersService.findById(Number(id));

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  @ApiCreatedResponse({
    type: User,
    description: "User is created successfully",
  })
  @Post()
  createUser(@Body() body: CreateUserDTO): User {
    return this.usersService.createUser(body);
  }
}
