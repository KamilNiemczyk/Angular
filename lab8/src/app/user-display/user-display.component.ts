import { Component } from '@angular/core';
import { UserFormComponent } from '../user-form/user-form.component';
import { UserService } from '../user.service';
import { IUser } from '../IUser';
@Component({
  selector: 'app-user-display',
  standalone: true,
  imports: [UserFormComponent],
  templateUrl: './user-display.component.html',
  styleUrl: './user-display.component.scss'
})
export class UserDisplayComponent {
  constructor(private userService: UserService){}
  users: IUser[] = [];
  refreshUsers(){
    console.log('refreshing users');
    this.users = this.userService.getUsers();
    console.log(JSON.stringify(this.users) + ' tab from UserDisplayComponent');
  }
  deteleUser(id: number){
    this.userService.deleteUserByID(id);
    this.refreshUsers();
  }
  clearUsers(){
    this.userService.clearUsers();
    this.refreshUsers();
  }
}
