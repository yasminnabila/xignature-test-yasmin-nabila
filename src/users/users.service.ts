import { Injectable } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
  private users: any = [{ id: 0, name: "Fachrul" }];

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
