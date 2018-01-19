import React, { Component } from 'react';

import { App } from './app';
import { ConnectedRouter } from 'react-router-redux';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { RideOrDiePrivacyPolicyScreen } from '../screens/ride-or-die-privacy-policy';
import { Route } from 'react-router';
import { SplashScreen } from '../screens/splash';

export class Root extends Component {

    render() {
        const { store, history } = this.props;

        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <App>
                        <Route exact path='/' component={SplashScreen} />
                        <Route path='/ride-or-die-privacy-policy' component={RideOrDiePrivacyPolicyScreen} />
                    </App>
                </ConnectedRouter>
            </Provider>
        );
    }
}

Root.defaultProps = {
    store: null,
    history: null
};

Root.propTypes = {
    store: PropTypes.object,
    history: PropTypes.object
};
