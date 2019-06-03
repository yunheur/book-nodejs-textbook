import classNames from 'classnames/bind';
import * as React from 'react';

import styles from './AuthContent.scss';

const cx = classNames.bind(styles);

export interface IProps {
  title: any,
  children: any
}

const AuthContent = (props: IProps) => {
  const { title, children } = props;
  return (
    <div className={cx('auth-content')}>
      <div className={cx('title')}> {title}</div>
      {children}
    </div>
  );
};

export default AuthContent;