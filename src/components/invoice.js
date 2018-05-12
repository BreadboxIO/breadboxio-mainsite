import InvoiceClient from '../components/invoice-client';
import InvoiceHeading from '../components/invoice-heading';
import InvoiceTable from '../components/invoice-table';
import React from 'react';

export const Invoice = () => {
    return (
        <div className='invoice'>
            <InvoiceHeading />
            <InvoiceClient />
            <InvoiceTable />
        </div>
    );
};
