import { Injectable } from '@angular/core';
import { CreateUserDto } from '../models/dto/CreateUserDto';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isLoggedIn(): boolean {
    let user = localStorage.getItem('User');
    if (user == null) return false;
    return true;
  }

  login(userData: IUser): boolean {
    const usersJson = localStorage.getItem('Users');
    if (usersJson == null) return false;

    const users: IUser[] = JSON.parse(usersJson);
    let user = users.find(
      (user) =>
        user.username == userData.username &&
        user.password == userData.password,
    );

    if (user == undefined) return false;

    localStorage.setItem('User', JSON.stringify(user));
    return true;
  }

  logout() {
    localStorage.removeItem('User');
  }

  register(userData: CreateUserDto) {
    let usersJson = localStorage.getItem('Users');

    if (usersJson == null) {
      let user: IUser = {
        id: 1,
        username: userData.username,
        password: userData.password,
      };
      let users: IUser[] = [];
      users.push(user);

      localStorage.setItem('Users', JSON.stringify(users));
      return;
    }

    let users: IUser[] = JSON.parse(usersJson);

    const id =
      users.reduce((maxId, obj) => {
        return obj.id > maxId ? obj.id : maxId;
      }, 0) + 1;

    let user: IUser = {
      id: id,
      username: userData.username,
      password: userData.password,
    };

    users.push(user);

    localStorage.setItem('Users', JSON.stringify(users));

    localStorage.setItem('User', JSON.stringify(user));
  }
}
