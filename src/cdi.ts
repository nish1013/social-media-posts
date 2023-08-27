import { Inject, Container, Singleton } from 'typescript-ioc';

// Define the interfaces for your services
// NOTE: why not interface? 
// check typescript-ioc readme :)
abstract class DatabaseService {
    abstract fetchUser(id: number): string;
}

// Define the concrete implementation of DatabaseService
@Singleton
class ConcreteDatabaseService 
    implements DatabaseService {
    fetchUser(id: number) {
        return `User ${id}`;
    }
}

// Define the service that depends on DatabaseService
class UserService {
    constructor(
        @Inject private readonly database: DatabaseService){
    }

    getUser(id: number) {
        return this.database.fetchUser(id);
    }
}

// Register services with the container
Container.bind(DatabaseService).to(ConcreteDatabaseService);
Container.bind(UserService);

// Resolve the UserService from the container
const userService = Container.get(UserService);

// Use the service
console.log(userService.getUser(1)); // Output: User 1
