import { action, observable } from 'mobx';

class CommonStore {
  @observable
  public header: any;

  private root: any;

  constructor(root: any) {
    this.root = root;
    this.header = {
      visible: true
    };
  }

  @action
  public setHeaderVisibility = (visible: boolean) => {
    this.header.visible = visible;
  };
}

export default CommonStore;