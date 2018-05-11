import React, { Component } from 'react';

import { InvoiceClient } from '../components/invoice-client';
import { InvoiceHeading } from '../components/invoice-heading';
import InvoiceTable from '../components/invoice-table';

export class InvoiceGeneratorScreen extends Component {

    render = () => {
        const clientName = 'The H2 Group';
        const clientStreetAddress = '5947 Compton Street';
        const clientZipCode = '46220';
        const clientState = 'IN';
        const clientCity = 'Indianapolis';

        return (
            <div className='invoice'>
                <InvoiceHeading clientName={clientName} />
                <InvoiceClient
                    city={clientCity}
                    name={clientName}
                    state={clientState}
                    streetAddress={clientStreetAddress}
                    zipCode={clientZipCode}
                />
                <InvoiceTable />
            </div>
        );
    }
}
