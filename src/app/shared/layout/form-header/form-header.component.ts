import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-header',
  templateUrl: './form-header.component.html',
  styleUrls: ['./form-header.component.css'],
})
export class FormHeaderComponent implements OnInit {
  @Input() mt: string = '7rem';

  constructor() {}

  ngOnInit() {}
}
