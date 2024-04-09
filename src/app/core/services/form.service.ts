import { Injectable } from '@angular/core';
import { IForm } from '@core/interfaces/IForm';
import { NotFoundError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor() {}

  getLastId(): number {
    let formsJson = localStorage.getItem('Forms');

    if (formsJson == null) return 0;

    let forms: IForm[] = JSON.parse(formsJson);

    const lastId = forms.reduce((maxId, obj) => {
      return obj.id > maxId ? obj.id : maxId;
    }, 0);

    return lastId;
  }

  createForm(formData: IForm) {
    let formsJson = localStorage.getItem('Forms');

    if (formsJson == null) {
      let forms: IForm[] = [];
      forms.push(formData);

      localStorage.setItem('Forms', JSON.stringify(forms));
      return;
    }

    let forms = JSON.parse(formsJson);
    forms.push(formData);

    localStorage.setItem('Forms', JSON.stringify(forms));
  }

  getForm(id: number): IForm {
    let formsJson = localStorage.getItem('Forms');
    if (formsJson == null) throw NotFoundError;

    const forms = JSON.parse(formsJson);
    let form = forms.find((form: IForm) => form.id == id);

    return form;
  }

  updateForm(updateForm: IForm) {
    let formsJson = localStorage.getItem('Forms');
    if (formsJson == null) throw NotFoundError;

    const forms = JSON.parse(formsJson);

    const index = forms.findIndex((form: IForm) => form.id === updateForm.id);

    if (index === -1) {
      throw new Error(`Form with ID ${updateForm.id} not found.`);
    }

    // Update the form with new data
    forms[index] = updateForm;

    // Save the updated forms array back to localStorage
    localStorage.setItem('Forms', JSON.stringify(forms));
  }

  getAll(): IForm[] {
    let formsJson = localStorage.getItem('Forms');
    if (formsJson == null) return [];

    const forms = JSON.parse(formsJson);

    return forms;
  }
}
