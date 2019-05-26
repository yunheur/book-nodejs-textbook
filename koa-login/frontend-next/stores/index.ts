import RootStore from './modules';

const isServer = !process.browser;
let store: RootStore | null = null;

const createStore = () => {
  if (isServer) {
    return new RootStore();
  }
  if (store === null) {
    store = new RootStore();
  }
  return store;
};

export default createStore;