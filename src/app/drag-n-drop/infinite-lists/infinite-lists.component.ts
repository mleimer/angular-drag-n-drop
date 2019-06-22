import {Component} from '@angular/core';
import {List} from './model/list';
import {ListItem} from './model/list-item';

@Component({
  selector: 'app-infinite-lists',
  templateUrl: './infinite-lists.component.html',
  styleUrls: ['./infinite-lists.component.scss']
})
export class InfiniteListsComponent {

  lists: List[] = [
    new List('Demo List', [
      new ListItem('Item 1'),
      new ListItem('Item 2'),
      new ListItem('Item 3'),
      new ListItem('Disabled item', true),
      new ListItem('Item 4')
    ]),
    new List('Disabled List', [
      new ListItem('Item in Disabled List 1'),
      new ListItem('Item in Disabled List 2')
    ], true)
  ];

  /**
   * Drag'N'Drop
   */

  // TODO

  /**
   * List and list item manipulation
   */

  addNewList(value: string) {
    this.lists.push(new List(value));
  }

  removeList(toBeRemovedList: List) {
    this.lists = this.lists.filter(list => list !== toBeRemovedList);
  }

  addNewListItem(list: List, value: string) {
    list.listItems.push(new ListItem(value));
  }

  removeListItem(list: List, toBeRemovedListItem: ListItem) {
    list.listItems = list.listItems.filter(listItem => listItem !== toBeRemovedListItem);
  }


}
