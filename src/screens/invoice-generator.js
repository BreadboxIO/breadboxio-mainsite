import React, { Component } from 'react';

import { InvoiceClient } from '../components/invoice-client';
import { InvoiceHeading } from '../components/invoice-heading';

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
                <div className='invoice__table'>
                    <div className='invoice__table__heading'>
                        <div className='invoice__table__heading__cell'>Hours</div>
                        <div className='invoice__table__heading__cell'>Task Description</div>
                        <div className='invoice__table__heading__cell'>Rate</div>
                        <div className='invoice__table__heading__cell'>Line Total</div>
                        <div className='invoice__table__heading__cell'>+</div>
                    </div>
                    <div className='invoice__table__row'>
                        <div className='invoice__table__row__cell'>Hours</div>
                        <div className='invoice__table__row__cell'>Website Maintenance</div>
                        <div className='invoice__table__row__cell'>$100.00</div>
                        <div className='invoice__table__row__cell'>$800</div>
                        <div className='invoice__table__row__cell'>+</div>
                    </div>
                </div>
            </div>
        );
    }
}
