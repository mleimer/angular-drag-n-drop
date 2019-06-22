import {ListItem} from './list-item';

export class List {
  title: string;
  items: ListItem[];
  disabled: boolean;

  constructor(name: string) {
    this.title = name;
    this.items = [];
    this.disabled = false;
  }
}

