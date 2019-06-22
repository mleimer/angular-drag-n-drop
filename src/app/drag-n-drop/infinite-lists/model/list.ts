import {ListItem} from './list-item';

export class List {
  title: string;
  listItems: ListItem[];
  disabled: boolean;

  constructor(name: string, listItems: ListItem[] = [], disabled: boolean = false) {
    this.title = name;
    this.listItems = listItems;
    this.disabled = false;
  }
}

