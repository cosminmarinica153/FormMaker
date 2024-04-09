import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFormComponent } from './create-form.component';
import { SharedModule } from '@shared/shared.module';
import { CheckboxComponent } from './components/form-types/checkbox/checkbox.component';
import { FileUploadComponent } from './components/form-types/file-upload/file-upload.component';
import { MultipleChoiceComponent } from './components/form-types/multiple-choice/multiple-choice.component';
import { ParagraphComponent } from './components/form-types/paragraph/paragraph.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio'
import { MatSelectModule } from '@angular/material/select'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltip } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,

    DragDropModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatTooltip,
    MatMenuModule
  ],
  declarations: [
    CreateFormComponent,

    CheckboxComponent,
    FileUploadComponent,
    MultipleChoiceComponent,
    ParagraphComponent,

  ]
})
export class CreateFormModule { }
