import { Component, Output, Input} from '@angular/core';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';
import { UserListComponent } from '../user-list/user-list.component';
import { IUser } from '../user-list/UserInterface';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  user = {
    id: this.generateId(),
    name: '',
    lastname: '',
    phone: 0,
    date: '',
    address: {
      street: '',
      number: 0,
      postalCode: 0,
      flatNumber: 0,
      city: ''
    }
  };
  @Output() userAdded = new EventEmitter<IUser>();
  addNew() {
    if (this.user.name === '' || this.user.lastname === '' || this.user.phone === 0 || this.user.date === '' || this.user.address.street === '' || this.user.address.number === 0 || this.user.address.postalCode === 0 || this.user.address.flatNumber === 0 || this.user.address.city === '') {
      return alert('Please fill all fields!');
    }else{
      this.userAdded.emit(this.user);
      this.resetForm();
    }
  }
  resetForm() {
    this.user = {
      id: this.generateId(),
      name: '',
      lastname: '',
      phone: 0,
      date: '',
      address: {
        street: '',
        number: 0,
        postalCode: 0,
        flatNumber: 0,
        city: ''
      }
    };
  }
  generateId() {
    return Math.floor(Math.random() * 1000);
  }
  @Input() isEdited : boolean = false;
  @Input() editedID : number = 0;
  @Output() editUser = new EventEmitter<IUser>();
  edit() {
    this.user.id = this.editedID;
    this.editUser.emit(this.user);
    this.isEdited = false;
    this.resetForm();
  }
}
