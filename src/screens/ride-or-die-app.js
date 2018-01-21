import React, { Component } from 'react';

import { AppHeader } from '../components/app-header';
import { AppScreenshot } from '../components/app-screenshot';
import { Icon } from '../components/icon';

export class RideOrDieAppScreen extends Component {

    render() {

        return (
            <div className='app-detail'>
                <AppHeader
                    name='Ride or Die'
                    appIconSrc='https://is3-ssl.mzstatic.com/image/thumb/Purple128/v4/a2/a3/19/a2a31987-df5a-ed66-4be6-02afed46616b/AppIcon-1x_U007emarketing-85-220-0-4.png/460x0w.jpg'
                />
                <div className='app-detail__content'>
                    <div className='app-detail__content__screenshot'>
                        <AppScreenshot images={[
                            require('../assets/images/apps/ride-or-die-01.jpg')
                        ]} />
                    </div>
                    <div className='app-detail__content__description'>
                        <p>Never get caught in dangerous weather while motorcycle or bike riding again!</p>

                        <p>Just one tap away! Open up <strong>RIDE OR DIE<sup>®</sup></strong> and instantly know <em>whether</em> the current <em>weather</em> conditions are comfortable for a motorcycle or bike ride.</p>

                        <p>Choose what types of weather in which you prefer riding by adjusting your settings.</p>

                        <p>Tap the <em>Current Mode</em> button to switch into <em>Commute Mode.</em> In Commute Mode, RIDE OR DIE will utilize your commute times and your home/work locations to estimate <em>whether</em> the <em>weather</em> will match your riding preferences when you're leaving for and returning from work.</p>
                        
                        <p>Flip the <em>Language</em> setting to <em>Explicit</em> for a more aggressive ride message.</p>

                        <div className='app-detail__store-links'>
                            <a href='https://itunes.apple.com/app/id1265169204' target='_blank'><Icon name='apple' /> App Store</a>
                            <a href='#' target='_blank'><Icon name='android' /> Google Play</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
