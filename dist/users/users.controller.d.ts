import { CreateUserDTO } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUsers(): any;
    getUserById(id: string): any;
    createUser(body: CreateUserDTO): any;
}
