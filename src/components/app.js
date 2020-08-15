import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Navigation } from './navigation';
import { NavigationToggle } from './navigation-toggle';
import { Overlay } from './overlay';
import '../styles/index.scss';

export class App extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  };

  static defaultProps = {
    children: null,
  };

  constructor(props) {
    super(props);
    this.state = { navigationActive: false };

    this.toggleNavigation = this.toggleNavigation.bind(this);
    this.closeNavigation = this.closeNavigation.bind(this);
  }

  componentDidMount() {
    // When the app.js component mounts it fires an event called 'appReady'
    // the index.html file uses this event to clear out the critical styles and remove the app preloader
    const event = new CustomEvent('appReady', { bubbles: true, cancelable: false });
    document.dispatchEvent(event);
  }

  closeNavigation() {
    this.setState({ navigationActive: false });
  }

  toggleNavigation() {
    const { navigationActive } = this.state;
    this.setState({ navigationActive: !navigationActive });
  }

  render() {
    const { children } = this.props;
    const { navigationActive } = this.state;

    return (
      <div className={`app${navigationActive ? ' app--navigation-active' : ''}`}>
        <div className="app__screen">
          <Overlay active={navigationActive} onClick={this.toggleNavigation} />
          {children}
        </div>
        <NavigationToggle onClick={this.toggleNavigation} navigationActive={navigationActive} />
        <Navigation active={navigationActive} closeNavigation={this.closeNavigation} />
      </div>
    );
  }
}
