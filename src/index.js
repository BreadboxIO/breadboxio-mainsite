import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { Root } from './components/root';
import { configureStore } from './util/configure-store';
import createHistory from 'history/createBrowserHistory';
import { render } from 'react-dom';

export const history = createHistory();
export const store = configureStore(history);

const init = Component => render(
    <AppContainer>
        <Component history={history} store={store} />
    </AppContainer>,
    document.getElementById('app')
);

init(Root);

if (module.hot) {
    module.hot.accept('./components/root', () => {
        const nextRoot = require('./components/root').Root;
        init(nextRoot);
    });
}
