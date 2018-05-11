import React, { Component } from 'react';

import { Icon } from './icon';
import PropTypes from 'prop-types';
import { getClientNumber } from '../util/get-client-number';

export class InvoiceClient extends Component {

    render = () => {
        const { name, city, streetAddress, zipCode, state } = this.props;

        return (
            <div className='invoice-client'>
                <div className='invoice-client__client-detail'>
                    <h1>{name} ({getClientNumber(name)})</h1>
                    <h2>{streetAddress}</h2>
                    <h2>{city}, {state} {zipCode}</h2>
                </div>
                <div className='invoice-client__icon'>
                    <Icon name='chevron-right' />
                </div>
                <div className='invoice-client__retailer-detail'>
                    <h1>Breadbox LLC</h1>
                    <h2>1219 62nd Street #204</h2>
                    <h2>Wauwatosa, WI 53213</h2>
                </div>
            </div>
        );
    }
}

InvoiceClient.defaultProps = {
    name: '',
    streetAddress: '',
    state: '',
    zipCode: '',
    city: ''
};

InvoiceClient.propTypes = {
    name: PropTypes.string.isRequired,
    streetAddress: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zipCode: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired
};
