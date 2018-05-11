import PropTypes from 'prop-types';
import React from 'react';

export const AppIcon = props => {
    const { imageSrc } = props;

    if (!imageSrc) return null;

    return (
        <div className='app-icon' style={{ backgroundImage: `url(${imageSrc})` }} />
    );
};

AppIcon.defaultProps = {
    imageSrc: ''
};

AppIcon.propTypes = {
    imageSrc: PropTypes.string.isRequired,
};
