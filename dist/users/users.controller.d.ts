import { UsersService } from "./users.service";
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getUsers(): any;
    getUserById(id: string): any;
}
