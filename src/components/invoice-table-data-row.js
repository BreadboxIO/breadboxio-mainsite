import { InvoiceTableCell } from './invoice-table-cell';
import PropTypes from 'prop-types';
import React from 'react';

export const InvoiceTableDataRow = props => {
    const { hours, description, rate } = props;
    const total = rate * hours;

    return (
        <div className='invoice-table__data-row invoice-table__table-row'>
            <InvoiceTableCell>{hours.toFixed(2)}</InvoiceTableCell>
            <InvoiceTableCell flex={5}>{description}</InvoiceTableCell>
            <InvoiceTableCell flex={2} className='text-align--right'>${rate.toFixed(2)}</InvoiceTableCell>
            <InvoiceTableCell flex={2} className='text-align--right'>${total.toFixed(2)}</InvoiceTableCell>
            <InvoiceTableCell flex='none'>+</InvoiceTableCell>
        </div>
    );
};

InvoiceTableDataRow.defaultProps = {
    hours: 0,
    description: 'Product Maintenance',
    rate: 100
};

InvoiceTableDataRow.propTypes = {
    hours: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired
};
