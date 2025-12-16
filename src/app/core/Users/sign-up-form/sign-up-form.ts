import { Component,signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RedirectCommand, RouterLink } from '@angular/router';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  AbstractControl,
} from '@angular/forms';
import { ConfigService } from '../../../Config-Service';

@Component({
  selector: 'app-sign-up-form',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    RouterLink,
    ReactiveFormsModule,
    MatCheckbox,
    MatIconModule
],
  templateUrl: './sign-up-form.html',
  styleUrl: './sign-up-form.css',
})
export class SignUpForm {
  //Validations
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    this.hasUppercase,
    this.hasNumber,
    this.hasSpecialCharacter,
  ]);
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  hasNumber(control: AbstractControl) {
    const value = control.value;
    if (value && !/\d/.test(value)) {
      return { number: true };
    }
    return null;
  }
  hasSpecialCharacter(control: AbstractControl) {
    const value = control.value;
    if (value && !/[!@#$%^&*(),.?":{}|_<>]/.test(value)) {
      return { specialCharacter: true };
    }
    return null;
  }
  hasUppercase(control: AbstractControl) {
    const value = control.value;
    if (value && !/[A-Z]/.test(value)) {
      return { uppercase: true };
    }
    return null;
  }

  onSubmit(){
    RedirectCommand;
  }
  //Get users
  constructor(private ConfigService:ConfigService){}

  ngOnInit(){

  }
}
