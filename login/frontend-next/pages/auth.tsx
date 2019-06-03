import { inject, observer } from 'mobx-react';
import { withRouter } from 'next/router';
import * as React from 'react';
import { AuthWrapper } from '../components/Auth';
import PageTemplate from '../components/common/PageTemplate';
// import { Login, Register } from '../containers/Auth';

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

  // public RouteComponent = (path, { ...rest }) => {
  //   if (path === '/auth/login') {
  //     return (<Login {...rest} />);
  //   }
  //   if (path === '/auth/register') {
  //     return (<Register {...rest} />);
  //   }
  //   return null;
  // };

  public render() {
    const { router: { asPath } } = this.props;
    return (
      <PageTemplate>
        <AuthWrapper>
          {/* {
            this.RouteComponent(asPath)
          } */}
        </AuthWrapper>
      </PageTemplate>
    );
  }
}

export default withRouter(Auth);