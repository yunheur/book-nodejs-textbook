import { inject, observer } from 'mobx-react';
import * as React from 'react';
import Header from '../../components/common/Header';

export interface IProps {
  common: any
}

@inject('common')
@observer
class HeaderContainer extends React.Component<IProps, any> {
  public render() {
    const { common: { header: { visible } } } = this.props;
    if (!visible) return null;
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default HeaderContainer;