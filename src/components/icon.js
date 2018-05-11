import PropTypes from 'prop-types';
import React from 'react';

export const Icon = props => {
    const { name, color } = props;

    return (
        <i className={`fa fa-fw fa-${name}`} aria-hidden='true' style={{ color }} />
    );
};

Icon.defaultProps = {
    color: '',
    name: 'bell-o'
};

Icon.propTypes = {
    color: PropTypes.string,
    name: PropTypes.string
};
