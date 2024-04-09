import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent implements OnInit {
  @Input() data: any;
  @Output() changeQuestion = new EventEmitter<any>();
  @Output() updateOptions = new EventEmitter<any>();

  questionForm!: FormGroup;
  optionForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.optionForm = this.fb.group({
      option: [''],
    });
    this.questionForm = this.fb.group({
      question: [this.data.question],
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.data.options, event.previousIndex, event.currentIndex);
  }

  deleteOption(index: number) {
    this.data.options.splice(index, 1);
    this.updateOptions.emit({ options: this.data.options });
  }

  addOption(value: string) {
    if (value == '') return;

    this.data.options.push(value);
    this.updateOptions.emit({ options: this.data.options });

    this.optionForm.reset();
  }

  onQuestionChange() {
    this.changeQuestion.emit({
      question: this.questionForm.get('question')?.value,
    });
  }
}
