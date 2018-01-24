import React, { Component } from 'react';

import { AppTitle } from './app-title';
import { Icon } from './icon';
import PropTypes from 'prop-types';

export class AppDetailHero extends Component {

    render() {
        const { appName, appIconSrc, heroImgSrc, appStoreLink, googlePlayLink } = this.props;

        return (
            <div className='app-detail-hero'>
                <div className='app-detail-hero__content'>
                    <AppTitle
                        appIconSrc={appIconSrc}
                        name={appName}
                    />
                    <div className='app-detail-hero__content__leader'>
                        <h1>Your safety.<br />Made easy.</h1>
                        <p>Instantly know <em>wheather</em> the <em>weather</em> is alright for riding.</p>
                    </div>
                    <div className='app-detail-hero__content__store-links'>
                        {appStoreLink && <a href={appStoreLink} target='_blank'><Icon name='apple' /> App Store</a>}
                        {googlePlayLink && <a href={googlePlayLink} target='_blank'><Icon name='android' /> Google Play</a>}
                    </div>
                </div>
                <div className='app-detail-hero__image'>
                    <div style={{ backgroundImage: `url(${heroImgSrc})` }} />
                </div>
            </div>
        );
    }
}

AppDetailHero.defaultProps = {
    appName: '',
    appIconSrc: '',
    heroImgSrc: '',
    appStoreLink: '',
    googlePlayLink: ''
};

AppDetailHero.propTypes = {
    appName: PropTypes.string,
    appIconSrc: PropTypes.string,
    heroImgSrc: PropTypes.string,
    appStoreLink: PropTypes.string,
    googlePlayLink: PropTypes.string
};
