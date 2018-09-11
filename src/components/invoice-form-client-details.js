import React from 'react';
import { selectClientCity, selectClientName, selectClientState, selectClientStreetAddress, updateClient, selectClientZipCode } from '../ducks/client';

import { InvoiceFormTextInput } from './invoice-form-text-input';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const InvoiceFormClientDetails = props => {
    const { updateClient, name, streetAddress, city, state, zipCode } = props;

    return (
        <div className='invoice-form__section'>
            <h2>Client Details</h2>
            <InvoiceFormTextInput
                label='Name'
                onChange={value => updateClient({ key: 'name', value })}
                placeholder='Cool Company Name LLC'
                value={name}
            />
            <InvoiceFormTextInput
                label='Street Address'
                onChange={value => updateClient({ key: 'streetAddress', value })}
                placeholder='123 Fake Street'
                value={streetAddress}
            />
            <InvoiceFormTextInput
                label='City'
                onChange={value => updateClient({ key: 'city', value })}
                placeholder='Super City'
                value={city}
            />
            <InvoiceFormTextInput
                label='State'
                onChange={value => updateClient({ key: 'state', value })}
                value={state}
            />
            <InvoiceFormTextInput
                label='Zip'
                onChange={value => updateClient({ key: 'zipCode', value })}
                placeholder='00000'
                value={zipCode}
            />
        </div>
    );
};

InvoiceFormClientDetails.defaultProps = {
    city: '',
    name: '',
    state: '',
    streetAddress: '',
    zipCode: '',
    updateClient: () => {}
};

InvoiceFormClientDetails.propTypes = {
    city: PropTypes.string,
    name: PropTypes.string,
    state: PropTypes.string,
    streetAddress: PropTypes.string,
    zipCode: PropTypes.string,
    updateClient: PropTypes.func
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

export default connect(mapStateToProps, { updateClient })(InvoiceFormClientDetails);
