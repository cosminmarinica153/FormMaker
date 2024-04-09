import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { IUser } from '@core/interfaces/IUser';
import { CreateUserDto } from '@core/models/dto/CreateUserDto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submit: boolean = false;
  user!: IUser;
  userId: number = 0;

  get username() {
    return this.loginForm.get('username') as FormControl;
  }
  get password() {
    return this.loginForm.get('password') as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  onLogin() {
    this.submit = true;

    if (!this.loginForm.valid) return;

    if (!this.authService.login(this.loginData())) {
      this.loginForm.setErrors({ notFound: true });
      return;
    }

    this.router.navigate(['home']);
  }

  loginData(): IUser {
    return (this.user = {
      id: 0,
      username: this.username.value,
      password: this.password.value,
    });
  }
}
