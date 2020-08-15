import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { RideOrDieAppScreen } from '../screens/ride-or-die-app';
import { RideOrDiePrivacyPolicyScreen } from '../screens/ride-or-die-privacy-policy';
import { InvoiceGeneratorScreen } from '../screens/invoice-generator';
import { App } from './app';
import { SplashScreen } from '../screens/splash';

export const Root = (props) => {
  const { store } = props;

  return (
    <Provider store={store}>
      <BrowserRouter>
        <App>
          <Route exact path="/" component={SplashScreen} />
          <Route path="/ride-or-die-app" component={RideOrDieAppScreen} />
          <Route path="/ride-or-die-privacy-policy" component={RideOrDiePrivacyPolicyScreen} />
          <Route path="/invoice-generator" component={InvoiceGeneratorScreen} />
        </App>
      </BrowserRouter>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object,
};

Root.defaultProps = {
  store: null,
};
