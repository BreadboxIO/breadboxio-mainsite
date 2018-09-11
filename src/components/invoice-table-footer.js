import React, { Component } from 'react';

import { InvoiceTableCell } from './invoice-table-cell';
import PropTypes from 'prop-types';
import _ from 'lodash';

export class InvoiceTableFooter extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired,
        fees: PropTypes.number,
        feePercent: PropTypes.number
    };

    static defaultProps = {
        items: [],
        fees: 0,
        feePercent: 0
    };

    getFeeTotal() {
        const { fees, feePercent } = this.props;

        const subTotal = this.getSubTotal();
        const multiplier = feePercent ? feePercent / 100 : 0;

        return fees + (subTotal * multiplier);
    }

    getNetTotal() {
        return this.getSubTotal() + this.getFeeTotal();
    }

    getSubTotal() {
        const { items } = this.props;
        let result = 0;

        items.forEach(item => {
            const total = item.getTotalCost();
            result = result + total;
        });

        return result;
    }

    getTotalHours() {
        const { items } = this.props;
        return _.sumBy(items, 'hours');
    }

    render() {
        const { feePercent } = this.props;
        const totalHours = this.getTotalHours().toFixed(2);
        const subTotal = this.getSubTotal().toFixed(2);
        const feeTotal = this.getFeeTotal().toFixed(2);
        const netTotal = this.getNetTotal().toFixed(2);

        return (
            <div className='invoice-table__footer'>
                <div className='invoice-table__data-row invoice-table__table-row'>
                    <InvoiceTableCell>{totalHours}</InvoiceTableCell>
                    <InvoiceTableCell spacer flex={5} />
                    <InvoiceTableCell flex={2} className='text-align--right text-transform--uppercase'>Subtotal:</InvoiceTableCell>
                    <InvoiceTableCell flex={2} className='text-align--right'>${subTotal}</InvoiceTableCell>
                    <InvoiceTableCell flex='none'>+</InvoiceTableCell>
                </div>
                <div className='invoice-table__data-row invoice-table__table-row'>
                    <InvoiceTableCell spacer flex={5} style={{ marginBottom: '-100px' }}>
                        <p>Please make checks payable to <strong>Breadbox LLC</strong>.<br />Deliver check to sales rep or mail to:</p>
                        <p><strong>Breadbox LLC</strong> · 1219 62nd St #204, Wauwatosa, WI 53213<br />(414) 614-0628 · <a href='mailto:contact@breadbox.io'>contact@breadbox.io</a></p>
                    </InvoiceTableCell>
                    <InvoiceTableCell spacer />
                    <InvoiceTableCell flex={2} className='text-align--right text-transform--uppercase'>Taxes/Fees ({feePercent}%):</InvoiceTableCell>
                    <InvoiceTableCell flex={2} className='text-align--right'>${feeTotal}</InvoiceTableCell>
                    <InvoiceTableCell flex='none'>+</InvoiceTableCell>
                </div>
                <div className='invoice-table__data-row invoice-table__table-row'>
                    <InvoiceTableCell spacer />
                    <InvoiceTableCell spacer flex={5} />
                    <InvoiceTableCell flex={2} className='invoice-table__footer__total-label text-align--right text-transform--uppercase'><strong>Total To Pay:</strong></InvoiceTableCell>
                    <InvoiceTableCell flex={2} className='invoice-table__footer__total-value text-align--right'><strong>${netTotal}</strong></InvoiceTableCell>
                    <InvoiceTableCell flex='none' className='invoice-table__footer__total-value'><strong>=</strong></InvoiceTableCell>
                </div>
            </div>
        );
    }
}
