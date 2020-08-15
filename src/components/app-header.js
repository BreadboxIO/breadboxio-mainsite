import PropTypes from 'prop-types';
import React from 'react';
import { AppTitle } from './app-title';

export const AppHeader = (props) => {
  const { name, appIconSrc } = props;

  if (!name) return null;

  return (
    <div className="app-header">
      <div>
        <AppTitle appIconSrc={appIconSrc} name={name} />
      </div>
    </div>
  );
};

AppHeader.propTypes = {
  appIconSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
