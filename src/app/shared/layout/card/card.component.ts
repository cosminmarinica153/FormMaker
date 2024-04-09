import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() preview: boolean = false;
  @Input() isRequired: boolean = false;
  @Output() delete = new EventEmitter<any>();
  @Output() requiredUpdate = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  deleteCard() {
    this.delete.emit();
  }

  updateRequired() {
    this.requiredUpdate.emit();
  }
}
