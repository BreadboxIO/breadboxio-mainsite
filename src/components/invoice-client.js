import React from 'react';
import { selectClientCity, selectClientName, selectClientState, selectClientStreetAddress, selectClientZipCode } from '../ducks/client';

import { Icon } from './icon';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getClientNumber } from '../util/get-client-number';

export const InvoiceClient = props => {
    const { name, city, streetAddress, zipCode, state } = props;
    const clientNumber = getClientNumber(name);

    return (
        <div className='invoice-client'>
            <div className='invoice-client__client-detail'>
                <h1>{name} ({clientNumber})</h1>
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
};

InvoiceClient.defaultProps = {
    city: '',
    name: '',
    state: '',
    streetAddress: '',
    zipCode: ''
};

InvoiceClient.propTypes = {
    city: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    streetAddress: PropTypes.string.isRequired,
    zipCode: PropTypes.string.isRequired
};

const mapStateToProps = state => {
    return {
        city: selectClientCity(state),
        name: selectClientName(state),
        state: selectClientState(state),
        streetAddress: selectClientStreetAddress(state),
        zipCode: selectClientZipCode(state)
    };
};

export default connect(mapStateToProps, {})(InvoiceClient);
