import PropTypes from 'prop-types';
import React from 'react';

export const NavigationToggle = (props) => {
  const { onClick, navigationActive } = props;

  return (
    <button
      className={`navigation-toggle${navigationActive ? ' navigation-toggle--navigation-active' : ''}`}
      onClick={onClick}
      type="button"
    >
      <span />
    </button>
  );
};

NavigationToggle.defaultProps = {
  onClick: () => {},
  navigationActive: false,
};

NavigationToggle.propTypes = {
  onClick: PropTypes.func,
  navigationActive: PropTypes.bool,
};
