import { action, observable } from 'mobx';
import * as AuthAPI from '../../lib/api/auth';

class UserStore {
  @observable private loggedInfo: object; // 현재 로그인중인 유저의 정보 
  @observable private logged: boolean; // 현재 로그인중인지 알려준다
  @observable private validated: boolean; // 이 값은 현재 로그인중인지 아닌지 한번 서버측에 검증했음을 의미

  private root: any;

  constructor(root: any) {
    this.root = root;
    this.loggedInfo = {
      thumbnail: null,
      username: null
    };
    this.logged = false;
    this.validated = false;
  }

  @action
  public setLoggedInfo = (loggedInfo: any) => {
    this.loggedInfo = loggedInfo;
    this.logged = true;
  }

  @action
  public setValidated = (validated: boolean) => {
    this.validated = validated;
  }

  @action
  public checkStatus = async () => {
    try {
      const res = await AuthAPI.checkStatus();
      this.loggedInfo = res;
      this.validated = true;
    } catch (error) {
      this.validated = false;
    }
  }
}

export default UserStore;