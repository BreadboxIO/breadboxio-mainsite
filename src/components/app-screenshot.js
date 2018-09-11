import React, { Component } from 'react';

import PropTypes from 'prop-types';

export class AppScreenshot extends Component {
    static propTypes = {
        images: PropTypes.array.isRequired,
    };

    static defaultProps = {
        images: []
    };

    renderScreenshots() {
        const { images } = this.props;
        const result = [];

        images.forEach((image, index) => {
            result.push(
                <div
                    key={index}
                    style={{ backgroundImage: `url(${image})`}}
                />
            );
        });

        return result;
    }

    render() {
        const { images } = this.props;

        if (images.length < 1) return null;

        const screenshots = this.renderScreenshots();

        return (
            <div className='app-screenshot'>
                <div className='app-screenshot__iphone'>
                    <img src={require('../assets/images/apps/iphone.png')} />
                </div>
                <div className='app-screenshot__screenshots'>
                    {screenshots}
                </div>
            </div>
        );
    }
}
