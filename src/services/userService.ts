import { User } from "../models/user";
import { Database } from "./database";

export class UserService {
    private db: Database; 

constructor() {
    this.db = new Database;
}

async getAll() : Promise<User[]>{
    const users:User[] = await this.db.query("SELECT * FROM users");
    return users;
}

async getById(id:string) : Promise<User> {
    const users:User[] = await this.db.query("SELECT * FROM users WHERE id", [id]);
    if (users.length > 0) {
        return users[0];
    }
    return users[1]
}

async notExist(login:string) : Promise<boolean> {
    const user:User[] = await this.db.query("SELECT * FROM users WHERE id", [login]);
    return user.length === 0;
}

async create(newUser: User) : Promise<User> {
    const result = await this.db.query("INSERT INTO users(firstname, lastname, login, password) VALUES(?,?,?,?)", [newUser.firstname, newUser.lastname, newUser.login, newUser.password]);
    newUser.id = result.lastId;
    return newUser;
}

async delete(id:string) : Promise<any> {
    const result = await this.db.query("DELETE FROM users WHERE id=?", [id]);
    return result;
}

async update(user:User) : Promise<User[]> {
    const result = await this.db.query("UPDATE users SET firstname=?, lastname=? WHERE id=?", [user.firstname, user.lastname, user.id]);
    return result;
} 

}