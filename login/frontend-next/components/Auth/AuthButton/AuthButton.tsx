import classNames from 'classnames/bind';
import * as React from 'react';

import styles from './AuthButton.scss';

const cx = classNames.bind(styles);

export interface IProps {
  children: any,
  onClick: any
}

const AuthButton = (props: IProps) => {
  const { children, onClick } = props;
  return (
    <div className={cx('auth-button')} onClick={onClick}>
      {children}
    </div>
  );
};

export default AuthButton;