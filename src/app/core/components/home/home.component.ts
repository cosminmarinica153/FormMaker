import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { IForm } from '@core/interfaces/IForm';
import { FormService } from '@core/services/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  hovered: boolean = false;
  isLoggedIn: boolean = false;

  userForms: IForm[] = [];

  constructor(
    private authService: AuthService,
    private formService: FormService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();

    this.userForms = this.formService.getAll();
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
  }

  createNewForm() {
    const lastId = this.formService.getLastId();

    let form: IForm = {
      id: lastId + 1,
      title: 'Untitled',
      description: '',
      cards: [],
    };

    this.formService.createForm(form);

    this.router.navigate(['create-form', form.id]);
  }

  goToForm(index: number) {
    this.router.navigate(['create-form', this.userForms[index].id]);
  }
}
