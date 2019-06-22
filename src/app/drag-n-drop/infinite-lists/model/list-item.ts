export class ListItem {
  name: string;
  disabled: boolean;

  constructor(name: string, disabled: boolean = false) {
    this.name = name;
    this.disabled = disabled;
  }

}
