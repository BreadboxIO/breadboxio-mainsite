import React, { Component } from 'react';

import { AppIcon } from './app-icon';
import PropTypes from 'prop-types';

export class AppTitle extends Component {

    render() {
        const { name, appIconSrc } = this.props;

        if (!name) return null;

        return (
            <div className='app-title'>
                <AppIcon imageSrc={appIconSrc} />
                <h1>{name}<sup>®</sup></h1>
            </div>
        );
    }
}

AppTitle.defaultProps = {
    appIconSrc: '',
    name: ''
};

AppTitle.propTypes = {
    appIconSrc: PropTypes.string,
    name: PropTypes.string.isRequired
};
