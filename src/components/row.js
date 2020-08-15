import PropTypes from 'prop-types';
import React from 'react';

export const Row = (props) => {
  const { children } = props;

  return <div className="row">{children}</div>;
};

Row.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
