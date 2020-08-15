import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const TYPES = {
  brand: 'fab',
  solid: 'fas',
  outline: 'far',
};

export const Icon = (props) => {
  const { className: classNameProp, name, style, type: typeProp } = props;
  const type = TYPES[typeProp];
  const className = classnames(classNameProp, `${type} fa-${name}`);

  return <i className={className} style={style} />;
};

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.oneOf(Object.keys(TYPES).map((key) => TYPES[key])),
};

Icon.defaultProps = {
  className: '',
  name: 'bell',
  style: undefined,
  type: 'solid',
};
