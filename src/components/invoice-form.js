import React from 'react';

import { BlockButton } from './block-button';
import { Icon } from './icon';
import InvoiceFormClientDetails from './invoice-form-client-details';
import InvoiceFormInvoiceItems from './invoice-form-invoice-items';

export const InvoiceForm = () => {
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
                <InvoiceFormClientDetails />
                <InvoiceFormInvoiceItems />
                <BlockButton color='success' onClick={window.print}>
                    <Icon name='print' /> Print
                </BlockButton>
            </div>
        </div>
    );
};
