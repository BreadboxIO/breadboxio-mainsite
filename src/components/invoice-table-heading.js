import { InvoiceTableCell } from './invoice-table-cell';
import React from 'react';

export const InvoiceTableHeading = () => {
    return (
        <div className='invoice-table__heading invoice-table__table-row'>
            <InvoiceTableCell heading>Hours</InvoiceTableCell>
            <InvoiceTableCell heading flex={5}>Task Description</InvoiceTableCell>
            <InvoiceTableCell heading flex={2} className='text-align--right'>Rate</InvoiceTableCell>
            <InvoiceTableCell heading flex={2} className='text-align--right'>Line Total</InvoiceTableCell>
            <InvoiceTableCell heading flex='none'>+</InvoiceTableCell>
        </div>
    );
};
