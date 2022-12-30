import { CreateUserDTO } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";
export declare class UsersService {
    private users;
    findAll(): User[];
    findById(userId: number): User;
    createUser(createUserDto: CreateUserDTO): {
        name: string;
        id: number;
    };
}
