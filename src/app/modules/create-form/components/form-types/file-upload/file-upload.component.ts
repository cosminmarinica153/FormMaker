import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  @Input() data: any;
  @Output() changeQuestion = new EventEmitter<any>();
  @Output() updateCheckbox = new EventEmitter<any>();
  @Output() updateMaxFileSize = new EventEmitter<any>();

  questionForm!: FormGroup;

  isOptionsOpen: boolean = false;
  fileOptions = ['Document', 'Image', 'PDF', 'Video', 'Spreadsheet', 'Audio'];
  sizeOptions = ['1MB', '10MB', '100MB', '1GB'];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.questionForm = this.fb.group({
      question: [this.data.question],
    });

    if (
      Object.values(this.data.specificFileType).some((value) => value === true)
    )
      this.isOptionsOpen = true;
  }

  updateSize(size: string) {
    this.updateMaxFileSize.emit({
      fileSize: size,
    });
  }

  isFileChecked(option: string) {
    return this.data.specificFileType[option.toLowerCase()];
  }

  toggleOptions() {
    this.isOptionsOpen = !this.isOptionsOpen;
  }

  onQuestionChange() {
    this.changeQuestion.emit({
      question: this.questionForm.get('question')?.value,
    });
  }

  onCheckboxUpdate(option: string, index: number) {
    this.data.specificFileType[option.toLowerCase()] =
      !this.data.specificFileType[option.toLowerCase()];

    this.updateCheckbox.emit({ fileTypes: this.data.specificFileType });
  }
}
