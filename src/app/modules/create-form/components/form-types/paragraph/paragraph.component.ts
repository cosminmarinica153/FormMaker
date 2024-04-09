import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css'],
})
export class ParagraphComponent implements OnInit {
  @Input() data: any;
  @Output() changeQuestion = new EventEmitter<any>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      question: [this.data.question],
    });
  }

  onSubmit() {
    this.changeQuestion.emit({ question: this.form.get('question')?.value });
  }
}
