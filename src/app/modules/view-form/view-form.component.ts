import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IForm } from '@core/interfaces/IForm';
import { FormService } from '@core/services/form.service';

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.css'],
})
export class ViewFormComponent implements OnInit {
  form!: IForm;

  formGroup!: FormGroup;

  constructor(
    private formService: FormService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.form = this.formService.getForm(params['id']);
    });

    this.initForm();
  }

  initForm() {
    this.formGroup = this.fb.group({});
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }
}
