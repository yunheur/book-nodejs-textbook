import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { AuthWrapper } from '../../components/Auth';
import PageTemplate from '../../components/common/PageTemplate';
import { Register } from '../../containers/Auth';

export interface IProps {
  common: any
}

@inject('common')
@observer
class RegisterPage extends React.Component<IProps, any> {
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
        <AuthWrapper>
          <Register {...this.props} />
        </AuthWrapper>
      </PageTemplate>
    );
  }
}

export default RegisterPage;