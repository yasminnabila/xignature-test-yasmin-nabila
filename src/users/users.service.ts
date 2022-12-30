import { Injectable } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
  private users: User[] = [];

  findAll() {
    return this.users;
  }

  findById(userId: number) {
    return this.users.find((user) => user.id === userId);
  }

  createUser(createUserDto: CreateUserDTO) {
    const newUser = { id: Date.now(), ...createUserDto };

    this.users.push(newUser);

    return newUser;
  }
}
