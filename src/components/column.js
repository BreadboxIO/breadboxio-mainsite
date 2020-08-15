import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Column extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
    className: PropTypes.string,
    offset: PropTypes.number,
    offsetLg: PropTypes.number,
    offsetMd: PropTypes.number,
    offsetSm: PropTypes.number,
    offsetXl: PropTypes.number,
    order: PropTypes.number,
    orderLg: PropTypes.number,
    orderMd: PropTypes.number,
    orderSm: PropTypes.number,
    orderXl: PropTypes.number,
    width: PropTypes.number,
    widthLg: PropTypes.number,
    widthMd: PropTypes.number,
    widthSm: PropTypes.number,
    widthXl: PropTypes.number,
  };

  static defaultProps = {
    className: '',
    offset: null,
    offsetLg: null,
    offsetMd: null,
    offsetSm: null,
    offsetXl: null,
    order: null,
    orderLg: null,
    orderMd: null,
    orderSm: null,
    orderXl: null,
    width: null,
    widthLg: null,
    widthMd: null,
    widthSm: null,
    widthXl: null,
  };

  renderClassNames() {
    const { className } = this.props;

    const result = classNames(
      'column',
      className,
      this.renderOffsetClassNames(),
      this.renderOrderClassNames(),
      this.renderWidthClassNames()
    );

    return result;
  }

  renderOffsetClassNames() {
    const { offset, offsetLg, offsetMd, offsetSm, offsetXl } = this.props;

    const result = classNames({
      [`offset-xs-${offset}`]: offset,
      [`offset-lg-${offsetLg}`]: offsetLg,
      [`offset-md-${offsetMd}`]: offsetMd,
      [`offset-sm-${offsetSm}`]: offsetSm,
      [`offset-xl-${offsetXl}`]: offsetXl,
    });

    return result;
  }

  renderOrderClassNames() {
    const { order, orderLg, orderMd, orderSm, orderXl } = this.props;

    const result = classNames({
      [`order-xs-${order}`]: order,
      [`order-lg-${orderLg}`]: orderLg,
      [`order-md-${orderMd}`]: orderMd,
      [`order-sm-${orderSm}`]: orderSm,
      [`order-xl-${orderXl}`]: orderXl,
    });

    return result;
  }

  renderWidthClassNames() {
    const { width, widthLg, widthMd, widthSm, widthXl } = this.props;

    const result = classNames({
      [`column-xs-${width}`]: width,
      [`column-lg-${widthLg}`]: widthLg,
      [`column-md-${widthMd}`]: widthMd,
      [`column-sm-${widthSm}`]: widthSm,
      [`column-xl-${widthXl}`]: widthXl,
    });

    return result;
  }

  render() {
    const { children } = this.props;
    const className = this.renderClassNames();

    return <div className={className}>{children}</div>;
  }
}
