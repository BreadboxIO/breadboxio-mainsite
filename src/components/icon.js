import React, { Component } from 'react';

import PropTypes from 'prop-types';

export class Icon extends Component {

    render() {
        const { name } = this.props;

        return (
            <i className={`fa fa-fw fa-${name}`} aria-hidden='true' />
        );
    }
}

Icon.defaultProps = {
    name: 'bell-o'
};

Icon.propTypes = {
    name: PropTypes.string
};
