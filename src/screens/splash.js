import React, { Component } from 'react';

export class SplashScreen extends Component {

    render() {

        return (
            <div className='splash'>
                <div className='splash__content'>
                    <h1>Bread<span>box.io</span></h1>
                    <h2>Makers <span>of</span> Fine Internet&nbsp;Products</h2>
                    <svg className='splash__logo' viewBox='0 0 354.7 260.6'>
                        <path className='splash__logo__background' d='M9.3,176V96.2C3.3,84.6,0,71.3,0,58.5c0-15.3,4.6-29.6,12.9-40.4C21.9,6.5,34.5,0,48.3,0h192.4 c8.5,0,17,3.2,24.1,9c8-5.8,17.8-9,28.3-9c32.8,0,61.5,29.2,61.5,62.3c0,14.6-5.3,27.6-15.3,36.5V176l-161,84.6L9.3,176z' />
                        <path className='splash__logo__foreground' d='M201,89.1c0-43.2-36.9-78.3-75.5-78.4c-17.5,0-32.3,7.4-42.2,19.2C74.1,18,61.5,10.6,48.4,10.6 C26.1,10.6,10,32.3,10,59.1c0,12.4,3.4,24.7,9.3,35.1v76.2l159,79.6V136.7C192,126.9,201,110.4,201,89.1z' />
                    </svg>
                </div>
            </div>
        );
    }
}
