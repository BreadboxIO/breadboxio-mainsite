import React, { Component } from 'react';

import PropTypes from 'prop-types';

export class Overlay extends Component {

    render() {
        const { active, onClick } = this.props;

        return (
            <div className={`overlay${active ? ' overlay--active' : ''}`} onClick={onClick} />
        );
    }
}

Overlay.defaultProps = {
    active: false,
    onClick: () => {}
};

Overlay.propTypes = {
    active: PropTypes.bool,
    onClick: PropTypes.func
};
