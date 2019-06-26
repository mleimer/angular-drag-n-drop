import {Component} from '@angular/core';
import {List} from './model/list';
import {ListItem} from './model/list-item';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

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

  onDrop(event: CdkDragDrop<ListItem[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  mayDropInThisList(drag: CdkDrag, drop: CdkDropList) {
    return !drop.disabled;
  }


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
