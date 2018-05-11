import React, { Component } from 'react';

import { BrandLogo } from './brand-logo';
import { BrandTagline } from './brand-tagline';
import { BrandTitle } from './brand-title';
import PropTypes from 'prop-types';
import { getClientNumber } from '../util/get-client-number';
import moment from 'moment';

const DATE_FORMAT = 'MMMM D, YYYY';

export class InvoiceHeading extends Component {

    getInvoiceNumber = () => {
        const { clientName } = this.props;
        const today = this.getTodaysDate();
        const clientNumber = getClientNumber(clientName);

        return `${today.format('YYYYMMDD')}${clientNumber}`;
    }

    getTodaysDate = () => {
        return moment();
    }

    render = () => {
        const today = this.getTodaysDate();
        const dueDate = moment(today).add(1, 'month');

        return (
            <div className='invoice-heading'>
                <div className='invoice-heading__brand'>
                    <div className='invoice-heading__brand__logo-container'>
                        <BrandLogo />
                    </div>
                    <div className='invoice-heading__brand__title-container'>
                        <BrandTitle />
                        <BrandTagline />
                    </div>
                </div>
                <div className='invoice-heading__detail'>
                    <h1>Invoice #{this.getInvoiceNumber()}</h1>
                    <h2>Invoice Date: {today.format(DATE_FORMAT)}</h2>
                    <h2>Due Date: {dueDate.format(DATE_FORMAT)}</h2>
                </div>
            </div>
        );
    }
}

InvoiceHeading.defaultProps = {
    clientName: ''
};

InvoiceHeading.propTypes = {
    clientName: PropTypes.string.isRequired
};
