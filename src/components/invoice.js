import React from 'react';
import { InvoiceClientConnected } from './invoice-client';
import { InvoiceHeadingConnected } from './invoice-heading';
import { InvoiceTableConnected } from './invoice-table';

export const Invoice = () => {
  return (
    <div className="invoice">
      <InvoiceHeadingConnected />
      <InvoiceClientConnected />
      <InvoiceTableConnected />
    </div>
  );
};
