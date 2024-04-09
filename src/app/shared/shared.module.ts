import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { HeaderComponent } from './layout/header/header.component';
import { CardComponent } from './layout/card/card.component';
import { MatTooltipModule } from '@angular/material/tooltip'
import { RouterModule } from '@angular/router';
import { FormHeaderComponent } from './layout/form-header/form-header.component';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,

    MatTooltipModule,
    MatMenuModule
  ],
  declarations: [
    SharedComponent,

    HeaderComponent,
    FormHeaderComponent,
    CardComponent
  ],
  exports: [
    HeaderComponent,
    FormHeaderComponent,
    CardComponent
  ]
})
export class SharedModule { }
