import React from 'react';
import { Invoice } from '../components/invoice';
import { InvoiceForm } from '../components/invoice-form';

export const InvoiceGeneratorScreen = () => {
  return (
    <div style={{ minHeight: '100%', display: 'flex' }}>
      <InvoiceForm />
      <Invoice />
    </div>
  );
};
