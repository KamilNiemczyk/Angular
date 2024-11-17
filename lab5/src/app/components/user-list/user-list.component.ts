import { Component } from '@angular/core';
import { IUser } from '../user-list/UserInterface';
import { UserFormComponent } from '../user-form/user-form.component';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserFormComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  users : IUser[] = [];
  constructor() {
    this.users = [
      {
        id: 1,
        name: 'John',
        lastname: 'Doe',
        phone: 123456789,
        date: '01/01/2020',
        address: {
          street: 'Main Street',
          number: 123,
          postalCode: 12345,
          city: 'City',
          flatNumber: 1
        }
      },
      {
        id: 2,
        name: 'Jane',
        lastname: 'Doe',
        phone: 987654321,
        date: '01/01/2020',
        address: {
          street: 'Main Street',
          number: 123,
          postalCode: 12345,
          city: 'City',
          flatNumber: 1
        }
      }
    ];
  }
  addUser(user: IUser) {
    this.users.push(user);
  }
  delUser(user: IUser) {
    this.users = this.users.filter(u => u.id !== user.id);
  }
  isEdited = false;
  editedID = 0;
  changeEdit(user: IUser) {
    this.isEdited = !this.isEdited;
    this.editedID = user.id;
  }
  editUser(user: IUser) {
    this.users = this.users.map(u => u.id === user.id ? user : u);
  }
}
