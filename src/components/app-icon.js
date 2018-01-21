import React, { Component } from 'react';

import PropTypes from 'prop-types';

export class AppIcon extends Component {

    render() {
        const { imageSrc } = this.props;

        if (!imageSrc) return null;

        return (
            <div className='app-icon' style={{ backgroundImage: `url(${imageSrc})` }} />
        );
    }
}

AppIcon.defaultProps = {
    imageSrc: ''
};

AppIcon.propTypes = {
    imageSrc: PropTypes.string.isRequired,
};
