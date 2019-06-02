import { inject, observer } from 'mobx-react';
import * as React from 'react';
import Header from '../../components/common/Header';
import LoginButton from '../../components/common/LoginButton';
import storage from '../../lib/storage';

export interface IProps {
  common: any
}

@inject('common', 'user')
@observer
class HeaderContainer extends React.Component<IProps, any> {
  handleLogout = async () => {
    const { user } = this.props;
    try {
      await user.logout();
    } catch (e) {
      console.log(e);
    }

    storage.remove('loggedInfo');
    window.location.href = '/'; // 홈페이지로 새로고침
  }

  public render() {
    const { common: { header: { visible } }, user } = this.props;
    console.log(user);
    if (!visible) return null;
    console.log(user.loggedInfo.username);
    return (
      <Header>
        {
          user.logged ? (
            <div>
              {user.loggedInfo.username} <div onClick={this.handleLogout}>(로그아웃)</div>
            </div>) : <LoginButton />
        }
      </Header>
    );
  }
}

export default HeaderContainer;