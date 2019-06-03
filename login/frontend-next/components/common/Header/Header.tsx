import classNames from 'classnames/bind';
import Link from 'next/link';
import { IoIosMenu } from 'react-icons/io';
import styles from './Header.scss';

const cx = classNames.bind(styles);

interface IProps {
  children: any;
}

const Header = (props: IProps) => {
  const { children } = props;
  return (
    <div className={cx('header')}>
      <div className={cx('white-background')}>
        <div className={cx('contents')}>
          <div className={cx('logo')}>
            YUNHEUR
          </div>
          <div className={cx('spacer')} />
          {children}
        </div>
      </div>
      <div className={cx('gradient-border')} />
    </div>
  );
};

export default Header;