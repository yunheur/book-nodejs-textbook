import classNames from 'classnames/bind';
import Link from 'next/link';
import * as React from 'react';

import styles from './RightAlignedLink.scss';

const cx = classNames.bind(styles);

export interface IProps {
  to: any;
  children: any;
}

const RightAlignedLink = (props: IProps) => {
  const { to, children } = props;
  return (
    <div className={cx('right-aligned-link')}>
      <Link href={to}>
        <a className={cx('link')}>
          {children}
        </a>
      </Link>
    </div>
  );
};

export default RightAlignedLink;