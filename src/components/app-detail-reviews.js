import React, { Component } from 'react';

import { Icon } from './Icon';
import PropTypes from 'prop-types';

export class AppDetailReviews extends Component {

    render() {
        const { appName, primaryColor } = this.props;

        return (
            <div className='app-detail-reviews'>
                <div>
                    <h2>What People Are Saying</h2>
                    <p><strong>{appName}</strong> is the best budgeting app you will ever use. Don’t just take our word for it, see what everyone else is saying!</p>
                    <div>
                        <div className='app-detail-reviews__review'>
                            <div className='app-detail-reviews__stars'>
                                <Icon name='star' color={primaryColor} />
                                <Icon name='star' color={primaryColor} />
                                <Icon name='star' color={primaryColor} />
                                <Icon name='star' color={primaryColor} />
                                <Icon name='star' color={primaryColor} />
                            </div>
                            <h3>Reliable way to make sure I don’t die</h3>
                            <p>Great app, beautifully and simply done. Large font and easy to use and set my settings, I use it daily to know if I’ll be riding in snow here in the Midwest on my commutes to work.</p>
                            <div className='app-detail-reviews__author'>by Jake.W. via the App Store</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AppDetailReviews.defaultProps = {
    appName: '',
    primaryColor: ''
};

AppDetailReviews.propTypes = {
    appName: PropTypes.string,
    primaryColor: PropTypes.string
};
