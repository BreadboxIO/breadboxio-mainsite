import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export class AppDetailFooter extends Component {

    render() {

        return (
            <div className='app-detail-footer'>
                <Link to='/'><strong>bread</strong>box.io</Link>
                <p>Copyright © {(new Date()).getFullYear()}</p>
            </div>
        );
    }
}
