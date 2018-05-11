import { App } from './app';
import { ConnectedRouter } from 'react-router-redux';
import { InvoiceGeneratorScreen } from '../screens/invoice-generator';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import React from 'react';
import { RideOrDieAppScreen } from '../screens/ride-or-die-app';
import { RideOrDiePrivacyPolicyScreen } from '../screens/ride-or-die-privacy-policy';
import { Route } from 'react-router';
import { SplashScreen } from '../screens/splash';

export const Root = props => {
    const { store, history } = props;

    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App>
                    <Route exact path='/' component={SplashScreen} />
                    <Route path='/ride-or-die-app' component={RideOrDieAppScreen} />
                    <Route path='/ride-or-die-privacy-policy' component={RideOrDiePrivacyPolicyScreen} />
                    <Route path='/invoice-generator' component={InvoiceGeneratorScreen} />
                </App>
            </ConnectedRouter>
        </Provider>
    );
};

Root.defaultProps = {
    store: null,
    history: null
};

Root.propTypes = {
    store: PropTypes.object,
    history: PropTypes.object
};
