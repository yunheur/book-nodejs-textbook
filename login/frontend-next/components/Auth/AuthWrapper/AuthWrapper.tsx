import classNames from 'classnames/bind';
import Link from 'next/link';

import styles from './AuthWrapper.scss';

const cx = classNames.bind(styles);

export interface IProps {
  children: any;
}

const AuthWrapper = (props: IProps) => {
  const { children } = props;
  return (
    <div className={cx('auth-wrapper')}>
      <div className={cx('shadow-box')}>
        <div className={cx('logo-wrapper')}>
          <Link href='/'>
            <a className={cx('logo')}>YUNHUER</a>
          </Link>
        </div>
        <div className={cx('contents')}>
          {children}
        </div>
      </div >
    </div >
  );
};

export default AuthWrapper;