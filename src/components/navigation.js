import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import { Icon } from './icon';

export const Navigation = (props) => {
  const { active, closeNavigation } = props;

  return (
    <nav className={`navigation${active ? ' navigation--active' : ''}`}>
      <Link to="/ride-or-die-app" onClick={closeNavigation}>
        Ride Or Die<sup>®</sup>
      </Link>
      <a href="https://github.com/BreadboxIO" target="_blank" rel="noreferrer">
        <Icon type="brand" name="github" /> GitHub
      </a>
      <a href="https://www.linkedin.com/company/27175369/" target="_blank" rel="noreferrer">
        <Icon type="brand" name="linkedin" /> LinkedIn
      </a>
      <a href="mailto:contact@breadbox.io">
        <Icon name="envelope" /> Contact
      </a>
    </nav>
  );
};

Navigation.defaultProps = {
  active: false,
  closeNavigation: null,
};

Navigation.propTypes = {
  active: PropTypes.bool,
  closeNavigation: PropTypes.func,
};
