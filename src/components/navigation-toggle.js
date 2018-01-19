import React, { Component } from 'react';

import PropTypes from 'prop-types';

export class NavigationToggle extends Component {

    render() {
        const { onClick, navigationActive } = this.props;

        return (
            <button className={`navigation-toggle${navigationActive ? ' navigation-toggle--navigation-active' : ''}`} onClick={onClick}>
                <span />
            </button>
        );
    }
}

NavigationToggle.defaultProps = {
    onClick: () => {},
    navigationActive: false
};

NavigationToggle.propTypes = {
    onClick: PropTypes.func,
    navigationActive: PropTypes.bool
};
