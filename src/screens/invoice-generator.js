import React, { Component } from 'react';

import { InvoiceClient } from '../components/invoice-client';
import InvoiceHeading from '../components/invoice-heading';
import InvoiceTable from '../components/invoice-table';

export class InvoiceGeneratorScreen extends Component {

    render = () => {
        const clientStreetAddress = '5947 Compton Street';
        const clientZipCode = '46220';
        const clientState = 'IN';
        const clientCity = 'Indianapolis';

        return (
            <div className='invoice'>
                <InvoiceHeading />
                <InvoiceClient
                    city={clientCity}
                    state={clientState}
                    streetAddress={clientStreetAddress}
                    zipCode={clientZipCode}
                />
                <InvoiceTable />
            </div>
        );
    }
}
