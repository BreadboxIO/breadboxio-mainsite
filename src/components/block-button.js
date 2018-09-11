import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

export class BlockButton extends Component {
    static propTypes = {
        onClick: PropTypes.func,
        disabled: PropTypes.bool,
        color: PropTypes.string,
        className: PropTypes.string,
        children: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ]).isRequired
    };

    static defaultProps = {
        disabled: false,
        color: '',
        className: '',
        children: null
    };

    renderClassNames() {
        const { color, className } = this.props;

        const result = classNames(
            'block-button',
            className,
            {
                [`block-button--${color}`]: color
            }
        );

        return result;
    }

    render() {
        const { children, disabled, onClick } = this.props;

        if (!children) return null;

        const className = this.renderClassNames();

        return (
            <button onClick={onClick} disabled={disabled} className={className}>{children}</button>
        );
    }
}
