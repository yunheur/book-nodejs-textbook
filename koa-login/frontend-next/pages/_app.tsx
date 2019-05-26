import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import App, { Container } from 'next/app';
import React from 'react';
import createStore from '../stores';
import '../styles/base.scss';

class YoloBookApp extends App {

  public static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  private mobxStore: any = null;

  constructor(props: any) {
    super(props);
    this.mobxStore = createStore();
  }

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider {...this.mobxStore}>
        <Container>
          <Component {...pageProps} />
          {process.env.NODE_ENV === 'development' && <DevTools />}
        </Container>
      </Provider>
    );
  }
}

export default YoloBookApp;
