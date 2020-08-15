import React, { Component } from 'react';

import PropTypes from 'prop-types';
import iPhoneImage from '../images/apps/iphone.png';

export class AppScreenshot extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
  };

  renderScreenshots() {
    const { images } = this.props;
    const result = [];

    images.forEach((image, index) => {
      result.push(<div key={index} style={{ backgroundImage: `url(${image})` }} />);
    });

    return result;
  }

  render() {
    const { images } = this.props;

    if (images.length < 1) return null;

    const screenshots = this.renderScreenshots();

    return (
      <div className="app-screenshot">
        <div className="app-screenshot__iphone">
          <img src={iPhoneImage} alt="iPhone screenshot" />
        </div>
        <div className="app-screenshot__screenshots">{screenshots}</div>
      </div>
    );
  }
}
