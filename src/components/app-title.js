import { AppIcon } from './app-icon';
import PropTypes from 'prop-types';
import React from 'react';

export const AppTitle = props => {
    const { name, appIconSrc } = props;

    if (!name) return null;

    return (
        <div className='app-title'>
            <AppIcon imageSrc={appIconSrc} />
            <h1>{name}<sup>®</sup></h1>
        </div>
    );
};

AppTitle.defaultProps = {
    appIconSrc: '',
    name: ''
};

AppTitle.propTypes = {
    appIconSrc: PropTypes.string,
    name: PropTypes.string.isRequired
};
