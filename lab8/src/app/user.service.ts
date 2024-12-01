import { Injectable } from '@angular/core';
import { IUser } from './IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }
  addUser(user: any){
    let users = this.getUsers();
    const randomID = Math.floor(Math.random() * 1000);
    user.id = randomID;
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }
  getUsers(){
    let users = localStorage.getItem('users');
    if(users){
      return JSON.parse(users);
    }else{
      return [];
    }
  }
  deleteUserByID(id:number){
    let users = this.getUsers();
    users = users.filter((user: IUser) => user.id !== id);
    localStorage.setItem('users', JSON.stringify(users));
  }
  clearUsers(){
    localStorage.removeItem('users');
  }
  
}
