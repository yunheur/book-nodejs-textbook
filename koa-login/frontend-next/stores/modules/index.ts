import AuthStore from './auth';
import CommonStore from './common';
import UserStore from './user';

class RootStore {
  public common: CommonStore;
  public auth: CommonStore;
  public user: UserStore;

  constructor() {
    this.common = new CommonStore(this);
    this.auth = new AuthStore(this);
    this.user = new UserStore(this);
  }
}

export default RootStore;