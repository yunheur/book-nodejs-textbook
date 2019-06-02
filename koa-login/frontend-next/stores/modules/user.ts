import { action, observable } from 'mobx';
import * as AuthAPI from '../../lib/api/auth';

class UserStore {
  @observable public loggedInfo: object; // 현재 로그인중인 유저의 정보 
  @observable public logged: boolean; // 현재 로그인중인지 알려준다
  @observable public validated: boolean; // 이 값은 현재 로그인중인지 아닌지 한번 서버측에 검증했음을 의미

  constructor(initialData = {}) {
    // console.log('UserStore ------------------');
    // console.log(initialData);
    // console.log('----------------------------');
    const { loggedInfo, logged, validated } = initialData;
    this.loggedInfo = !!loggedInfo ? loggedInfo : {
      thumbnail: null,
      username: null
    };
    this.logged = !!logged ? logged : false;
    this.validated = !!validated ? validated : false;
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

  @action
  public logout = async () => await AuthAPI.logout();
}

export default UserStore;