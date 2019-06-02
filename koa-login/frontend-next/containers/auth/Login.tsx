import { inject, observer } from 'mobx-react';
import Router, { withRouter } from 'next/router';
import queryString from 'query-string';
import React, { Component } from 'react';
import { AuthButton, AuthContent, AuthError, InputWithLabel, RightAlignedLink } from '../../components/Auth';
import storage from '../../lib/storage';

@inject('auth', 'user')
@observer
class Login extends Component {
  componentDidMount() {
    const { router } = this.props;
    const query = queryString.parse(router.query);

    if (query.expired !== undefined) {
      this.setError('세션에 만료되었습니다. 다시 로그인하세요.')
    }
  }

  handleChange = (e) => {
    const { auth } = this.props;
    const { name, value } = e.target;
    auth.changeInput({
      name,
      value,
      form: 'login'
    });
  }

  componentWillUnmount() {
    const { auth } = this.props;
    auth.initLoginForm();
  }

  setError = (message) => {
    const { auth } = this.props;
    auth.setError({
      form: 'login',
      message
    });
    return false;
  }

  handleLocalLogin = async () => {
    const { auth, user } = this.props;
    const { login: { form: { email, password } } } = auth;
    try {
      await auth.localLogin({ email, password });
      const { results } = auth;
      user.setLoggedInfo(results);
      Router.push({ pathname: '/' });
      storage.set('loggedInfo', results);
    } catch (e) {
      this.setError('잘못된 계정정보입니다.');
    }
  }

  render() {
    const { auth: { login: { form: { email, password }, error } } } = this.props; // form 에서 email 과 password 값을 읽어옴
    const { handleChange, handleLocalLogin } = this;

    return (
      <AuthContent title="로그인">
        <InputWithLabel
          label="이메일"
          name="email"
          placeholder="이메일"
          value={email}
          onChange={handleChange}
        />
        <InputWithLabel
          label="비밀번호"
          name="password"
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={handleChange}
        />
        {
          error && <AuthError>{error}</AuthError>
        }
        <AuthButton onClick={handleLocalLogin}>로그인</AuthButton>
        <RightAlignedLink to="/auth/register">회원가입</RightAlignedLink>
      </AuthContent>
    );
  }
}

export default withRouter(Login);