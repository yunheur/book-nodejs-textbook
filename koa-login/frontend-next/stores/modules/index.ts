import AuthStore from './auth';
import CommonStore from './common';
import UserStore from './user';

class RootStore {
  public common: CommonStore;
  public auth: CommonStore;
  public user: UserStore;

  constructor(initialData = {}) {
    this.common = new CommonStore(initialData.common);
    this.auth = new AuthStore(initialData.auth);
    this.user = new UserStore(initialData.user);
  }
}

export default RootStore;