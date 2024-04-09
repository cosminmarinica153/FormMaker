import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string = 'test';
  @Output() question = new EventEmitter<any>();
  @Output() titleUpdate = new EventEmitter<any>();

  hovered: boolean = false;
  formId: number = 0;
  showAdd: boolean = false;

  form!: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    if (decodeURIComponent(this.router.url).includes('create-form'))
      this.showAdd = true;

    this.route.params.subscribe((params) => {
      this.formId = params['id'];
    });

    this.form = this.fb.group({
      title: [this.title],
    });
  }

  emitNewQuestion(type: string) {
    this.question.emit({ questionType: type });
  }

  updateTitle() {
    this.titleUpdate.emit({ title: this.form.get('title')?.value });
  }
}
