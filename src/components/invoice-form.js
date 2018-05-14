import React, { Component } from 'react';

import InvoiceFormClientDetails from './invoice-form-client-details';
import InvoiceFormInvoiceItems from './invoice-form-invoice-items';

export class InvoiceForm extends Component {

    render = () => {

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
                </div>
            </div>
        );
    }
}
