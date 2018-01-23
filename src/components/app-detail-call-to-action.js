import React, { Component } from 'react';

import { Icon } from './Icon';
import PropTypes from 'prop-types';

export class AppDetailCallToAction extends Component {

    render() {
        const { appName, appStoreLink, backgroundColor } = this.props;

        return (
            <div className='app-detail-call-to-action' style={{ backgroundColor }}>
                <div>
                    <h2>What are you waiting for?</h2>
                    <p>That's right, what are you waiting for? You've come this far, read all the way to the bottom of the page. The only thing left to do is to get yourself over to the App Store and download <strong>{appName}</strong> today...</p>
                    <a href={appStoreLink}><Icon name='apple' /> App Store</a>
                </div>
            </div>
        );
    }
}

AppDetailCallToAction.defaultProps = {
    appName: '',
    appStoreLink: '',
    backgroundColor: '#ffbb37'
};

AppDetailCallToAction.propTypes = {
    appName: PropTypes.string,
    appStoreLink: PropTypes.string,
    backgroundColor: PropTypes.string
};
