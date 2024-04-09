import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-response',
  templateUrl: './view-response.component.html',
  styleUrls: ['./view-response.component.css'],
})
export class ViewResponseComponent implements OnInit {
  formId: number = 0;
  category: string = 'summary';

  constructor(private router: Router) {}

  ngOnInit() {
    if (decodeURIComponent(this.router.url).includes('summary'))
      this.category = 'summary';
    if (decodeURIComponent(this.router.url).includes('individual'))
      this.category = 'individual';
  }
}
