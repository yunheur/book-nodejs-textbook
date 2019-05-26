import { action, observable } from 'mobx';
import * as AuthAPI from '../../lib/api/auth';

class AuthStore {
  @observable public register: any;
  @observable public login: any;
  @observable public results: any;

  private root: any;

  constructor(root: any) {
    this.root = root;
    this.register = this.getInitRegisterData();
    this.login = this.getInitLoginData();
    this.results = {};
  }

  @action
  public changeInput = (data: { form: string; name: string; value: string; }) => {
    const { form, name, value } = data;
    this[form][name] = value;
  }

  @action
  public initRegisterForm = () => {
    this.register = this.getInitRegisterData();
  }

  @action
  public initLoginForm = () => {
    this.login = this.getInitLoginData();
  }

  @action
  public checkEmailExists = async (email: string) => {
    try {
      const { exists } = await AuthAPI.checkEmailExists(email);
      this.register.exists.email = exists;
    } catch (error) {
    }
  }

  @action
  public checkUsernameExists = async (username: string) => {
    try {
      const { exists } = await AuthAPI.checkUsernameExists(username);
      this.register.exists.username = exists;
    } catch (error) {
    }
  }

  @action
  public localRegister = async (data: { email: string; username: string; password: string; }) => {
    try {
      const res = await AuthAPI.localRegister(data);
      this.results = res;
    } catch (error) {
    }
  }

  @action
  public localLogin = async (data: { email: any; password: any; }) => {
    try {
      const res = await AuthAPI.localLogin(data);
      this.results = res;
    } catch (error) { }
  }

  @action
  public logout = async () => {
    await AuthAPI.logout();
  }

  @action
  public setError = (data: { form: string; message: string; }) => {
    const { form, message } = data;
    this[form]['error'] = message;
  }

  private getInitRegisterData = () => (
    {
      form: {
        email: '',
        password: '',
        passwordConfirm: '',
        username: '',
      },
      exists: {
        email: false,
        password: false
      },
      error: null
    }
  );

  private getInitLoginData = () => (
    {
      form: {
        email: '',
        password: ''
      },
      error: null
    }
  )
}

export default AuthStore;