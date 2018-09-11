import { Link } from 'react-router-dom';
import React from 'react';

export const AppDetailFooter = () => {
    const date = (new Date()).getFullYear();

    return (
        <div className='app-detail-footer'>
            <Link to='/'><strong>bread</strong>box.io</Link>
            <p>Copyright © {date}</p>
        </div>
    );
};
