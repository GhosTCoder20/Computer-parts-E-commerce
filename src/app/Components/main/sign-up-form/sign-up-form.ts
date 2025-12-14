import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { MatCheckboxModule, MatCheckbox } from '@angular/material/checkbox';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  AbstractControl,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    RouterLink,
    ReactiveFormsModule,
    MatCheckbox,
  ],
  templateUrl: './sign-up-form.html',
  styleUrl: './sign-up-form.css',
})
export class SignUpForm {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordForm:FormGroup;
  constructor(private fb:FormBuilder){
    this.passwordForm=this.fb.group({})
  }
  passwordMatchValidation(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
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
    if (value && !/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
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
  hasError(controlName: string, errorName: string) {
    return (
      this.passwordForm.get(controlName)?.hasError(errorName) &&
      this.passwordForm.get(controlName)?.touched
    );
  }
}
