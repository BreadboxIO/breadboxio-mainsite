import React, { Component } from 'react';

import { Icon } from './icon';
import PropTypes from 'prop-types';

export class Navigation extends Component {

    render() {
        const { active } = this.props;

        return (
            <nav className={`navigation${active ? ' navigation--active' : ''}`}>
                <a href='https://github.com/BreadboxIO' target='_blank'><Icon name='github' /> GitHub</a>
                <a href='https://www.linkedin.com/company/27175369/' target='_blank'><Icon name='linkedin-square' /> LinkedIn</a>
                <a href='mailto:contact@breadbox.io'><Icon name='envelope' /> Contact</a>
            </nav>
        );
    }
}

Navigation.defaultProps = {
    active: false
};

Navigation.propTypes = {
    active: PropTypes.bool
};
