import classNames from 'classnames/bind';
import React, { Component } from 'react';
import HeaderContainer from '../../../containers/common/HeaderContainer';
import Footer from '../Footer';
import styles from './PageTemplate.scss';

const cx = classNames.bind(styles);

interface IProps {
  children: any;
}

interface IState {
  isLogined: boolean;
}

class PageTemplate extends Component<IProps, IState> {
  public render() {
    const { children } = this.props;

    return (
      <div className={cx('page-template')}>
        <HeaderContainer />
        {children}
        <Footer />
      </div>
    );
  }
}

export default PageTemplate;
