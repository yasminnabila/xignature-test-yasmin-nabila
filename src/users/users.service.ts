import { Injectable } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      username: "Fachrul",
      email: "fachrul@gmail.com",
      password: "topsecretpassword",
    },
    {
      id: 2,
      username: "Fadhyl",
      email: "fadhyl@gmail.com",
      password: "verysecurepassword",
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(username: string): User {
    return this.users.find((user) => user.username === username);
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
