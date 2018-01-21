import React, { Component } from 'react';

import { AppTitle } from './app-title';
import PropTypes from 'prop-types';

export class AppHeader extends Component {

    render() {
        const { name, appIconSrc } = this.props;

        if (!name) return null;

        return (
            <div className='app-header'>
                <div>
                    <AppTitle appIconSrc={appIconSrc} name={name} />
                </div>
                <div className='app-header__download'>
                    <a href='#' target='_blank'>Download</a>
                </div>
            </div>
        );
    }
}

AppHeader.defaultProps = {
    appIconSrc: '',
    name: ''
};

AppHeader.propTypes = {
    appIconSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};
