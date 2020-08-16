import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { RideOrDieAppScreen } from '../screens/ride-or-die-app';
import { RideOrDiePrivacyPolicyScreen } from '../screens/ride-or-die-privacy-policy';
import { InvoiceGeneratorScreen } from '../screens/invoice-generator';
import { App } from './app';
import { SplashScreen } from '../screens/splash';
import { BMRCalculatorPrivacyPolicyScreen } from '../screens/bmr-calculator-privacy-policy';

export const Root = (props) => {
  const { store } = props;

  return (
    <Provider store={store}>
      <BrowserRouter>
        <App>
          <Route exact path="/" component={SplashScreen} />
          <Route path="/bmr-calculator-privacy-policy" component={BMRCalculatorPrivacyPolicyScreen} />
          <Route path="/invoice-generator" component={InvoiceGeneratorScreen} />
          <Route path="/ride-or-die-app" component={RideOrDieAppScreen} />
          <Route path="/ride-or-die-privacy-policy" component={RideOrDiePrivacyPolicyScreen} />
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
