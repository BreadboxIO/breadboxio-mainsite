import { Invoice } from '../components/invoice';
import InvoiceForm from '../components/invoice-form';
import React from 'react';

export const InvoiceGeneratorScreen = () => {
    return (
        <div style={{ minHeight: '100%', display: 'flex' }}>
            <InvoiceForm />
            <Invoice />
        </div>
    );
};
