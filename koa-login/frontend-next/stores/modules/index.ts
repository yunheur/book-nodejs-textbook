import CommonStore from './common';

class RootStore {
  public common: CommonStore;

  constructor() {
    this.common = new CommonStore(this);
  }
}

export default RootStore;