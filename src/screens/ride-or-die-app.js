import React, { Component } from 'react';

import { AppDetailCallToAction } from '../components/app-detail-call-to-action';
import { AppDetailFooter } from '../components/app-detail-footer';
import { AppDetailHero } from '../components/app-detail-hero';
import { AppDetailReviews } from '../components/app-detail-reviews';

export class RideOrDieAppScreen extends Component {

    render() {
        const appName = 'Ride or Die';
        const appStoreLink = 'https://itunes.apple.com/app/id1265169204';
        const primaryColor = '#ffbb37';

        return (
            <div className='app-detail'>
                <AppDetailHero
                    appIconSrc={require('../assets/images/apps/ride-or-die/app-icon.jpg')}
                    appName={appName}
                    appStoreLink='https://itunes.apple.com/app/id1265169204'
                    heroImgSrc={require('../assets/images/apps/ride-or-die/ride-or-die-01.png')}
                />
                <AppDetailReviews
                    appName={appName}
                    primaryColor={primaryColor}
                />
                <AppDetailCallToAction
                    backgroundColor={primaryColor}
                    appName={appName}
                    appStoreLink={appStoreLink}
                />
                <AppDetailFooter />
            </div>
        );
    }
}
