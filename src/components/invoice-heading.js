import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { BrandLogo } from './brand-logo';
import { BrandTagline } from './brand-tagline';
import { BrandTitle } from './brand-title';
import { getClientNumber } from '../util/get-client-number';
import { selectClientName } from '../ducks/client';

const DATE_FORMAT = 'MMMM D, YYYY';

export class InvoiceHeading extends Component {
  static getTodaysDate() {
    return moment();
  }

  static propTypes = {
    clientName: PropTypes.string.isRequired,
  };

  getInvoiceNumber() {
    const { clientName } = this.props;
    const today = InvoiceHeading.getTodaysDate();
    const clientNumber = getClientNumber(clientName);

    return `${today.format('YYYYMMDD')}${clientNumber}`;
  }

  render() {
    const today = InvoiceHeading.getTodaysDate();
    const dueDate = moment(today).add(1, 'month');
    const invoiceNumber = this.getInvoiceNumber();
    const invoiceDate = today.format(DATE_FORMAT);
    const dueDateFormatted = dueDate.format(DATE_FORMAT);

    return (
      <div className="invoice-heading">
        <div className="invoice-heading__brand">
          <div className="invoice-heading__brand__logo-container">
            <BrandLogo />
          </div>
          <div className="invoice-heading__brand__title-container">
            <BrandTitle />
            <BrandTagline />
          </div>
        </div>
        <div className="invoice-heading__detail">
          <h1>Invoice #{invoiceNumber}</h1>
          <h2>Invoice Date: {invoiceDate}</h2>
          <h2>Due Date: {dueDateFormatted}</h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    clientName: selectClientName(state),
  };
};

export const InvoiceHeadingConnected = connect(mapStateToProps, {})(InvoiceHeading);
