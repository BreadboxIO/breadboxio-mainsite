import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Grid extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
    className: PropTypes.string,
    maxWidth: PropTypes.bool,
  };

  static defaultProps = {
    maxWidth: false,
    className: '',
  };

  renderClassNames() {
    const { maxWidth, className } = this.props;

    const result = classNames('grid', className, { 'grid--max-width': maxWidth });

    return result;
  }

  render() {
    const { children } = this.props;
    const className = this.renderClassNames();

    return <div className={className}>{children}</div>;
  }
}
