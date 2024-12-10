import { makeObservable, observable, action } from 'mobx';

export class ButtonStore {
  id: string;
  title: string;

  constructor(id: string, title = 'Default Button') {
    this.id = id;
    this.title = title;

    makeObservable(this, {
      title: observable,
      setLabel: action,
    });
  }

  setLabel(newLabel: string) {
    this.title = newLabel;
  }

  onClick = () => {
    console.log(`Button ${this.id} clicked`);
  };
}
