import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IForm } from '@core/interfaces/IForm';
import { CardCreate } from '@core/interfaces/card-create';
import { FormService } from '@core/services/form.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css'],
})
export class CreateFormComponent implements OnInit {
  showSaveBtn: boolean = false;
  toggleSaveBtn() {
    this.showSaveBtn = !this.showSaveBtn;
  }

  form!: IForm;

  titleForm!: FormGroup;
  get formTitle() {
    return this.titleForm.get('title') as FormControl;
  }

  descriptionForm!: FormGroup;
  get formDescription() {
    return this.descriptionForm.get('description') as FormControl;
  }

  descriptionRows: number = 2;

  adjustTextareaHeight() {
    // Get the number of rows based on the content height
    const textarea = document.querySelector('textarea');
    if (textarea) {
      const lineHeight = parseInt(
        window.getComputedStyle(textarea).lineHeight,
        10,
      );
      const numberOfLines = Math.ceil(textarea.scrollHeight / lineHeight);
      this.descriptionRows = numberOfLines;
    }
  }

  constructor(
    private formService: FormService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.form = this.formService.getForm(params['id']);
    });

    this.titleForm = this.fb.group({
      title: [this.form.title],
    });
    this.descriptionForm = this.fb.group({
      description: [this.form.description],
    });
  }

  updateTitle(event?: any) {
    if (event != undefined) {
      this.form.title = event['title'];
      this.formService.updateForm(this.form);
      this.titleForm = this.fb.group({
        title: [this.form.title],
      });
      return;
    }

    this.form.title = this.formTitle.value;
    this.formService.updateForm(this.form);
  }
  updateDescription() {
    this.form.description = this.formDescription.value;
    this.form.description = this.form.description.trim();

    this.formDescription.reset();
    this.formDescription.setValue(this.form.description);

    this.formService.updateForm(this.form);
    this.toggleSaveBtn();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.form.cards, event.previousIndex, event.currentIndex);

    this.formService.updateForm(this.form);
  }

  handleNewQuestion(event: any) {
    const type = event['questionType'];

    const newId =
      this.form.cards.reduce((maxId, obj) => {
        return obj.id > maxId ? obj.id : maxId;
      }, 0) + 1;

    switch (type) {
      case 'paragraph':
        let paragraph = {
          id: newId,
          type: type,
          question: '',
          required: false,
        };

        this.form.cards.push(paragraph);
        break;

      case 'checkbox':
        let checkbox = {
          id: newId,
          type: type,
          question: '',
          required: false,
          options: [],
        };

        this.form.cards.push(checkbox);
        break;

      case 'multiple-choice':
        let multiChoice = {
          id: newId,
          type: type,
          question: '',
          required: false,
          options: [],
        };

        this.form.cards.push(multiChoice);
        break;

      case 'file-upload':
        let fileUpload = {
          id: newId,
          type: type,
          question: '',
          required: false,
          specificFileType: {
            document: false,
            pdf: false,
            spreadsheet: false,
            image: false,
            video: false,
            audio: false,
          },
          maxFileSize: '10MB',
        };

        this.form.cards.push(fileUpload);
        break;
    }

    this.formService.updateForm(this.form);
  }

  handleQuestionChange(event: any, index: number) {
    this.form.cards[index].question = event['question'];

    this.formService.updateForm(this.form);
  }

  handleUpdateOptions(event: any, index: number) {
    this.form.cards[index].options = event['options'];

    this.formService.updateForm(this.form);
  }

  handleUpdateCheckbox(event: any, index: number) {
    this.form.cards[index].specificFileType = event['fileTypes'];

    this.formService.updateForm(this.form);
  }

  handleUpdateMaxFileSize(event: any, index: number) {
    this.form.cards[index].maxFileSize = event['fileSize'];

    this.formService.updateForm(this.form);
  }

  handleDeleteCard(index: number) {
    this.form.cards.splice(index, 1);

    this.formService.updateForm(this.form);
  }

  handleUpdateRequired(index: number) {
    this.form.cards[index].required = !this.form.cards[index].required;

    this.formService.updateForm(this.form);
  }
}
