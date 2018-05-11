import PropTypes from 'prop-types';
import React from 'react';

export const Overlay = props => {
    const { active, onClick } = props;

    return (
        <div className={`overlay${active ? ' overlay--active' : ''}`} onClick={onClick} />
    );
};

Overlay.defaultProps = {
    active: false,
    onClick: () => {}
};

Overlay.propTypes = {
    active: PropTypes.bool,
    onClick: PropTypes.func
};
