export declare class UsersService {
    private users;
    findAll(): any;
    findById(userId: number): any;
    createUser(name: string): {
        id: number;
        name: string;
    };
}
