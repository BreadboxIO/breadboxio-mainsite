import React, { Component } from 'react';

import PropTypes from 'prop-types';

export class Icon extends Component {

    render() {
        const { name, color } = this.props;

        return (
            <i
                className={`fa fa-fw fa-${name}`}
                aria-hidden='true'
                style={{ color }}
            />
        );
    }
}

Icon.defaultProps = {
    color: '',
    name: 'bell-o'
};

Icon.propTypes = {
    color: PropTypes.string,
    name: PropTypes.string
};
