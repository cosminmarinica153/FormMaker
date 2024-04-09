import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewResponseComponent } from './view-response.component';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  declarations: [ViewResponseComponent]
})
export class ViewResponseModule { }
