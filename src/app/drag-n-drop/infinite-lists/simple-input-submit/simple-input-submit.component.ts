import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-simple-input-submit',
  templateUrl: './simple-input-submit.component.html',
  styleUrls: ['./simple-input-submit.component.scss']
})
export class SimpleInputSubmitComponent {

  @Input() label!: string;
  @Output() submittedValue = new EventEmitter<string>();

  value = '';

  onSubmit() {
    this.submittedValue.emit(this.value);
    this.value = '';
  }
}
