import { useStaticRendering } from 'mobx-react';
import RootStore from './modules';

const isServer = !process.browser;
useStaticRendering(isServer);

const createStore = (store = null) => {
  if (isServer || !store) {
    return new RootStore();
  }
  return store;
};

export default createStore;