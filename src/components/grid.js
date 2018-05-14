import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Grid extends Component {

    renderClassNames = () => {
        const { maxWidth, className } = this.props;

        const result = classNames(
            'grid',
            className,
            { 'grid--max-width': maxWidth }
        );

        return result;
    }

    render() {
        const { children } = this.props;

        return (
            <div className={this.renderClassNames()}>{children}</div>
        );
    }
}

Grid.defaultProps = {
    maxWidth: false,
    className: '',
    children: null
};

Grid.propTypes = {
    children: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ]).isRequired,
    className: PropTypes.string,
    maxWidth: PropTypes.bool
};
