import { Component } from '@angular/core';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login-form',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login-form.html',
  styleUrl: './styles.css',
})

export class LoginForm {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}
