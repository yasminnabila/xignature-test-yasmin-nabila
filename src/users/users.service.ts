import { Injectable } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: "Fachrul",
      email: "fachrul@gmail.com",
      password: "topsecretpassword",
    },
    {
      id: 2,
      name: "Fadhyl",
      email: "fadhyl@gmail.com",
      password: "verysecurepassword",
    },
  ];

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
