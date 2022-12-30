import { CreateUserDTO } from "./dto/create-user.dto";
export declare class UsersService {
    private users;
    findAll(): any;
    findById(userId: number): any;
    createUser(createUserDto: CreateUserDTO): {
        name: string;
        id: number;
    };
}
