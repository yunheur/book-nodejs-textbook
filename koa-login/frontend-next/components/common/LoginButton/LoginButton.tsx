import classNames from 'classnames/bind';
import Link from 'next/link';
import * as React from 'react';

import styles from './LoginButton.scss';

const cx = classNames.bind(styles);

const LoginButton = () => {
  return (
    <Link href='/auth/login'>
      <a className={cx('login-button')}>
        로그인 / 가입
      </a>
    </Link>
  );
};

export default LoginButton;