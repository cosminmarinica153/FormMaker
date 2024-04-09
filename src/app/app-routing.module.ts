import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@core/components/home/home.component';
import { LoginComponent } from '@core/components/login/login.component';
import { RegisterComponent } from '@core/components/register/register.component';
import { CreateFormComponent } from '@modules/create-form/create-form.component';
import { SettingsComponent } from '@modules/settings/settings.component';
import { ViewFormComponent } from '@modules/view-form/view-form.component';
import { ViewResponseComponent } from '@modules/view-response/view-response.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "create-form/:id",
    component: CreateFormComponent
  },
  {
    path: "form/:id",
    component: ViewFormComponent,
  },
  {
    path: "responses/:id/summary",
    component: ViewResponseComponent
  },
  {
    path: "responses/:id/individual",
    component: ViewResponseComponent
  },
  {
    path: "settings/:id",
    component: SettingsComponent
  },
  {
    path: 'responses/:id',
    redirectTo: '/responses/:id/summary',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
