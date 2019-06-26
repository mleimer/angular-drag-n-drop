import {Component, Input} from '@angular/core';
import {ListItem} from '../model/list-item';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {

  @Input() item!: ListItem;
  /*  @Output() setListItemEnabled = new EventEmitter<boolean>();
    @Output() removeListItem = new EventEmitter<void>();*/

}
