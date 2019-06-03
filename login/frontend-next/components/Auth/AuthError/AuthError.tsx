import classNames from 'classnames/bind';
import * as React from 'react';

import styles from './AuthError.scss';

const cx = classNames.bind(styles);

export interface IProps {
  children: any,
}

const AuthError = (props: IProps) => {
  const { children } = props;
  return (
    <div className={cx('auth-error')}>
      {children}
    </div>
  );
};

export default AuthError;