import { action, observable } from 'mobx';

class CommonStore {
  @observable
  public header: any;

  constructor(initialData = {}) {
    // console.log('AuthStore ------------------');
    // console.log(CommonStore);
    // console.log('----------------------------');
    const { header } = initialData;
    this.header = !!header ? header : {
      visible: true
    };
  }

  @action
  public setHeaderVisibility = (visible: boolean) => {
    this.header.visible = visible;
  };
}

export default CommonStore;