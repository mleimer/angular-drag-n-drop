import {Component, Input} from '@angular/core';
import {List} from '../model/list';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.scss']
})
export class ListHeaderComponent {

  @Input() list!: List;
  /*  @Output() setListEnabled = new EventEmitter<boolean>();
    @Output() removeList = new EventEmitter<void>();*/

}
