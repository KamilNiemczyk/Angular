import { Component } from '@angular/core';
import { Form, FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserService } from '../user.service';
interface UserForm{
  name: FormControl<string | null>;
  lastName: FormControl<string | null>;
  email: FormControl<string | null>;
  addresses: FormArray<FormGroup<AddressForm>>;
}
interface AddressForm{
  street: FormControl<string | null>;
  city: FormControl<string | null>;
  postalCode: FormControl<string | null>;
}
@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [UserService],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  constructor(private userService: UserService){}

  userForm: FormGroup<UserForm> = new FormGroup(
    {
      name: new FormControl('', [Validators.required,Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required,Validators.minLength(3)]),
      email: new FormControl('', [Validators.required,Validators.email]),
      addresses: new FormArray<FormGroup<AddressForm>>([])
    }, 
    {updateOn: 'change'}
  )
  get addresses(){
    return this.userForm.controls.addresses as FormArray<FormGroup<AddressForm>>;
  }
  saveForm(){
    const user = this.userForm.value;
    console.log(user + ' from UserFormComponent');
    this.userService.addUser(user);
  }
  addAddress(): void {
    this.userForm.controls.addresses.push(
      new FormGroup<AddressForm>({
        street: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        postalCode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{2}-[0-9]{3}')]),
      })
    );
  }

}
