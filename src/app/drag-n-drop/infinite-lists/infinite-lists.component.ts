import {Component} from '@angular/core';
import {List} from './model/list';
import {ListItem} from './model/list-item';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {MatSlideToggleChange} from '@angular/material';

@Component({
  selector: 'app-infinite-lists',
  templateUrl: './infinite-lists.component.html',
  styleUrls: ['./infinite-lists.component.scss']
})
export class InfiniteListsComponent {

  lists: List[] = [];

  newCardNames: string[] = [];
  newListName = '';

  constructor() {
  }

  drop(event: CdkDragDrop<ListItem[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  addNewList() {
    this.lists.push(new List(this.newListName));
    this.newListName = '';
    this.newCardNames.push('');
  }

  removeList(listIndex: number) {
    this.lists = this.lists.splice(listIndex, 1);
  }

  addNewCardItem(listIndex: number) {
    const newListItem = new ListItem(this.newCardNames[listIndex]);
    this.lists[listIndex].items.push(newListItem);
    this.newCardNames[listIndex] = '';
  }


  removeCardItem(listIndex: number, item: ListItem) {
    this.lists[listIndex].items = this.lists[listIndex].items.filter(i => i !== item);
  }

  /*
    toggleDragability(listIndex: number) {
      this.lists[listIndex].disabled = ! this.lists[listIndex].disabled;
    }*/
  toggleDragability($event: MatSlideToggleChange, item: ListItem) {
    item.disabled = !$event.checked;
    console.warn(item.disabled);
  }
}
