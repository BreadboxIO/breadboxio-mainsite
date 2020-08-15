import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';
import { Root } from './components/root';
import { configureStore } from './util/configure-store';

export const store = configureStore();

const init = (Component) =>
  render(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
    document.getElementById('app')
  );

init(Root);

if (module.hot) {
  module.hot.accept('./components/root', () => {
    // eslint-disable-next-line global-require
    const nextRoot = require('./components/root').Root;
    init(nextRoot);
  });
}
