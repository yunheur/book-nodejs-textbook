import { action, observable, runInAction } from 'mobx';
import * as AuthAPI from '../../lib/api/auth';

class AuthStore {
  @observable public register: any;
  @observable public login: any;
  @observable public results: any;

  constructor(initialData = {}) {
    // console.log('AuthStore ------------------');
    // console.log(initialData);
    // console.log('----------------------------');
    const { register, login, results } = initialData;
    this.register = !!register ? register : this.getInitRegisterData();
    this.login = !!login ? login : this.getInitLoginData();
    this.results = !!results ? results : {};
  }

  @action
  public changeInput = (data: { form: string; name: string; value: string; }) => {
    const { form, name, value } = data;
    this[form]['form'][name] = value;
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
      const { data: { exists } } = await AuthAPI.checkEmailExists(email);
      runInAction(() => {
        this.register.exists.email = exists;
      });
    } catch (error) {
      throw error;
    }
  }

  @action
  public checkUsernameExists = async (username: string) => {
    try {
      const { data: { exists } } = await AuthAPI.checkUsernameExists(username);
      runInAction(() => {
        this.register.exists.username = exists;
      });
    } catch (error) {
      throw error;
    }
  }

  @action
  public localRegister = async (data: { email: string; username: string; password: string; }) => {
    try {
      const res = await AuthAPI.localRegister(data);
      runInAction(() => {
        this.results = res.data;
      });
    } catch (error) {
      throw error;
    }
  }

  @action
  public localLogin = async (data: { email: string; password: string; }) => {
    try {
      const res = await AuthAPI.localLogin(data);
      runInAction(() => {
        this.results = res.data;
      });
    } catch (error) {
      throw error;
    }
  }

  @action
  public logout = async () => await AuthAPI.logout();

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