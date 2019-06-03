import classNames from 'classnames/bind';
import * as React from 'react';

import styles from './InputWithLabel.scss';

const cx = classNames.bind(styles);

export interface IProps {
  label: any;
}

// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const InputWithLabel = (props: IProps) => {
  const { label, ...rest } = props;
  return (
    <div className={cx('input-with-label')}>
      <div className={cx('label')}>{label}</div>
      <input className={cx('input')} {...rest} />
    </div>
  );
};

export default InputWithLabel;