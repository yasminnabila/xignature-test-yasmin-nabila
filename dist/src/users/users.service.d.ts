import { CreateUserDTO } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";
export declare class UsersService {
    private readonly users;
    findAll(): User[];
    findOne(username: string): User;
    findById(userId: number): User;
    createUser(createUserDto: CreateUserDTO): {
        username: string;
        email: string;
        password: string;
        id: number;
    };
}
