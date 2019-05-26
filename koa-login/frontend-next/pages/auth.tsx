import { inject, observer } from 'mobx-react';
import * as React from 'react';
import PageTemplate from '../components/common/PageTemplate';

export interface IProps {
  common: any
}

@inject('common')
@observer
class Auth extends React.Component<IProps, any> {
  // 페이지에 진입 할 때 헤더를 비활성화
  componentWillMount() {
    this.props.common.setHeaderVisibility(false);
  }

  // 페이지에서 벗어 날 때 다시 활성화
  componentWillUnmount() {
    this.props.common.setHeaderVisibility(true);
  }

  public render() {
    return (
      <PageTemplate>
        adfsa
      </PageTemplate>
    );
  }
}

export default Auth;