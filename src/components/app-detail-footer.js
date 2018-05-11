import { Link } from 'react-router-dom';
import React from 'react';

export const AppDetailFooter = () => {
    return (
        <div className='app-detail-footer'>
            <Link to='/'><strong>bread</strong>box.io</Link>
            <p>Copyright © {(new Date()).getFullYear()}</p>
        </div>
    );
};
