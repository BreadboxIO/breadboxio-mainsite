import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  selectClientCity,
  selectClientName,
  selectClientState,
  selectClientStreetAddress,
  updateClient,
  selectClientZipCode,
} from '../ducks/client';

import { InvoiceFormTextInput } from './invoice-form-text-input';

export const InvoiceFormClientDetails = (props) => {
  const { onChange, name, streetAddress, city, state, zipCode } = props;

  return (
    <div className="invoice-form__section">
      <h2>Client Details</h2>
      <InvoiceFormTextInput
        label="Name"
        onChange={(value) => onChange({ key: 'name', value })}
        placeholder="Cool Company Name LLC"
        value={name}
      />
      <InvoiceFormTextInput
        label="Street Address"
        onChange={(value) => onChange({ key: 'streetAddress', value })}
        placeholder="123 Fake Street"
        value={streetAddress}
      />
      <InvoiceFormTextInput
        label="City"
        onChange={(value) => onChange({ key: 'city', value })}
        placeholder="Super City"
        value={city}
      />
      <InvoiceFormTextInput label="State" onChange={(value) => onChange({ key: 'state', value })} value={state} />
      <InvoiceFormTextInput
        label="Zip"
        onChange={(value) => onChange({ key: 'zipCode', value })}
        placeholder="00000"
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
  onChange: () => {},
};

InvoiceFormClientDetails.propTypes = {
  city: PropTypes.string,
  name: PropTypes.string,
  state: PropTypes.string,
  streetAddress: PropTypes.string,
  zipCode: PropTypes.string,
  onChange: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    city: selectClientCity(state),
    name: selectClientName(state),
    state: selectClientState(state),
    streetAddress: selectClientStreetAddress(state),
    zipCode: selectClientZipCode(state),
  };
};

export const InvoiceFormClientDetailsConnected = connect(mapStateToProps, { onChange: updateClient })(
  InvoiceFormClientDetails
);
