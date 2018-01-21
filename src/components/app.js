import React, { Component } from 'react';

import { Navigation } from './navigation';
import { NavigationToggle } from './navigation-toggle';
import { Overlay } from './overlay';
import PropTypes from 'prop-types';

export class App extends Component {

    constructor(props) {
        super(props);
        this.state = { navigationActive: false };
    }

    componentDidMount() {
        // When the app.js component mounts it fires an event called 'appReady'
        // the index.html file uses this event to clear out the critical styles and remove the app preloader
        const event = new CustomEvent('appReady', { bubbles: true, cancelable: false });
        document.dispatchEvent(event);
    }

    closeNavigation = () => {
        this.setState({ navigationActive: false });
    }

    toggleNavigation = () => {
        this.setState({ navigationActive: !this.state.navigationActive });
    }

    render() {
        const { children } = this.props;
        const { navigationActive } = this.state;
        
        return (
            <div className={`app${navigationActive ? ' app--navigation-active' : ''}`}>
                <div className='app__screen'>
                    <Overlay active={navigationActive} onClick={this.toggleNavigation} />
                    {children}
                </div>
                <NavigationToggle onClick={this.toggleNavigation} navigationActive={navigationActive} />
                <Navigation active={navigationActive} closeNavigation={this.closeNavigation} />
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.oneOfType([ PropTypes.array, PropTypes.element ])
};
