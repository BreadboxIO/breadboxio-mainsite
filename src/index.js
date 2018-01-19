import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { App } from './components/app';
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

init(App);

if (module.hot) {
    module.hot.accept('./components/app', () => {
        const nextApp = require('./components/app').App;
        init(nextApp);
    });
}
