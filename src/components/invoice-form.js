import React, { Component } from 'react';
import { selectClientCity, selectClientName, selectClientState, selectClientStreetAddress, selectClientZipCode, updateClient } from '../ducks/client';

import { InvoiceFormTextInput } from './invoice-form-text-input';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class InvoiceForm extends Component {

    render = () => {
        const { city, name, streetAddress, zipCode, state, updateClient } = this.props;

        return (
            <div className='invoice-form'>
                <div className='invoice-form__container'>
                    <div>
                        <h1>Invoice Generator</h1>
                        <p>Complete this form to generate a browser-printable invoice.  To ensure the invoice prints correctly when the Google Chrome print dialog is open:</p>
                        <ol>
                            <li>Click <em>+ More Settings</em></li>
                            <li>Change <em>Margins</em> to <strong>None</strong></li>
                            <li>Toggle <em>Options: Background graphics</em> <strong>ON</strong></li>
                        </ol>
                    </div>
                    <div className='invoice-form__section'>
                        <h2>Client Details</h2>
                        <InvoiceFormTextInput
                            label='Name'
                            onChange={value => updateClient({ key: 'name', value })}
                            value={name}
                            placeholder='Cool Company Name LLC'
                        />
                        <InvoiceFormTextInput
                            label='Street Address'
                            onChange={value => updateClient({ key: 'streetAddress', value })}
                            value={streetAddress}
                            placeholder='123 Fake Street'
                        />
                        <InvoiceFormTextInput
                            label='City'
                            onChange={value => updateClient({ key: 'city', value })}
                            value={city}
                            placeholder='Super City'
                        />
                        <InvoiceFormTextInput
                            value={state}
                            onChange={value => updateClient({ key: 'state', value })}
                            label='State'
                        />
                        <InvoiceFormTextInput
                            label='Zip'
                            onChange={value => updateClient({ key: 'zipCode', value })}
                            value={zipCode}
                            placeholder='00000'
                        />
                    </div>
                </div>
            </div>
        );
    }
}

InvoiceForm.defaultProps = {
    city: '',
    name: '',
    state: '',
    streetAddress: '',
    zipCode: '',
    updateClient: () => {}
};

InvoiceForm.propTypes = {
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

export default connect(mapStateToProps, { updateClient })(InvoiceForm);
