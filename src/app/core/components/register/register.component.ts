import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { CreateUserDto } from '@core/models/dto/CreateUserDto';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submit: boolean = false;
  createUser!: CreateUserDto;

  get username() {
    return this.registerForm.get('username') as FormControl;
  }
  get password() {
    return this.registerForm.get('password') as FormControl;
  }
  get confirmPwd() {
    return this.registerForm.get('confirmPwd') as FormControl;
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
    this.registerForm = this.fb.group(
      {
        username: [null, [Validators.required]],
        password: [null, [Validators.required]],
        confirmPwd: [null, [Validators.required]],
      },
      { validators: [this.confirmPwdValidation] },
    );
  }

  confirmPwdValidation(fg: AbstractControl): Validators | null {
    return fg.get('password')?.value === fg.get('confirmPwd')?.value
      ? null
      : { notMatched: true };
  }

  onRegister() {
    this.submit = true;

    if (!this.registerForm.valid) return;

    this.authService.register(this.userData());

    this.router.navigate(['home']);
  }

  userData(): CreateUserDto {
    return (this.createUser = {
      username: this.username.value,
      password: this.password.value,
    });
  }
}
