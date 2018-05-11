import { AppTitle } from './app-title';
import PropTypes from 'prop-types';
import React from 'react';

export const AppHeader = props => {
    const { name, appIconSrc } = props;

    if (!name) return null;

    return (
        <div className='app-header'>
            <div>
                <AppTitle appIconSrc={appIconSrc} name={name} />
            </div>
        </div>
    );
};

AppHeader.defaultProps = {
    appIconSrc: '',
    name: ''
};

AppHeader.propTypes = {
    appIconSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};
