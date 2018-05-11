import React, { Component } from 'react';

import { InvoiceHeading } from '../components/invoice-heading';

export class InvoiceGeneratorScreen extends Component {

    render = () => {
        const clientName = 'The H2 Group';

        return (
            <div className='invoice'>
                <InvoiceHeading clientName={clientName} />
                <div className='invoice__client'>
                    <div className='invoice__client__client-detail'>
                        <h1>The H2 Group (HG1)</h1>
                        <h2>5947 Compton Street</h2>
                        <h2>Indianapolis, IN 46220</h2>
                    </div>
                    <div className='invoice__client__icon' />
                    <div className='invoice__client__retailer-detail'>
                        <h1>Breadbox LLC</h1>
                        <h2>1219 62nd Street #204</h2>
                        <h2>Wauwatosa, WI 53213</h2>
                    </div>
                </div>
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
