import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewFormComponent } from './view-form.component';
import { SharedModule } from '@shared/shared.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,

    MatCheckboxModule,
    MatRadioModule
  ],
  declarations: [
    ViewFormComponent,
  ]
})
export class ViewFormModule { }
