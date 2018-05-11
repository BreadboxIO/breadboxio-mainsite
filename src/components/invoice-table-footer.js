import React, { Component } from 'react';

import PropTypes from 'prop-types';
import _ from 'lodash';

export class InvoiceTableFooter extends Component {

    getFeeTotal = () => {
        const { fees, feePercent } = this.props;

        const subTotal = this.getSubTotal();
        const multiplier = feePercent ? feePercent / 100 : 0;

        return fees + (subTotal * multiplier);
    }

    getNetTotal = () => {
        return this.getSubTotal() + this.getFeeTotal();
    }

    getSubTotal = () => {
        const { items } = this.props;
        let result = 0;

        items.forEach(item => {
            const total = item.getTotalCost();
            result = result + total;
        });

        return result;
    }

    getTotalHours = () => {
        const { items } = this.props;
        return _.sumBy(items, 'hours');
    }

    render = () => {
        const { feePercent } = this.props;

        return (
            <div className='invoice-table__footer'>
                <div className='invoice-table__data-row invoice-table__table-row'>
                    <div className='invoice-table__table-cell'>{this.getTotalHours().toFixed(2)}</div>
                    <div className='invoice-table__table-cell invoice-table__spacer' />
                    <div className='invoice-table__table-cell text-transform--uppercase'>Subtotal:</div>
                    <div className='invoice-table__table-cell'>${this.getSubTotal().toFixed(2)}</div>
                    <div className='invoice-table__table-cell'>+</div>
                </div>
                <div className='invoice-table__data-row invoice-table__table-row'>
                    <div className='invoice-table__table-cell invoice-table__spacer' />
                    <div className='invoice-table__table-cell invoice-table__spacer' />
                    <div className='invoice-table__table-cell text-transform--uppercase'>Taxes/Fees ({feePercent}%):</div>
                    <div className='invoice-table__table-cell'>${this.getFeeTotal().toFixed(2)}</div>
                    <div className='invoice-table__table-cell'>+</div>
                </div>
                <div className='invoice-table__data-row invoice-table__table-row'>
                    <div className='invoice-table__table-cell invoice-table__spacer' />
                    <div className='invoice-table__table-cell invoice-table__spacer' />
                    <div className='invoice-table__table-cell text-transform--uppercase invoice-table__footer__total-label'>
                        <strong>Total To Pay:</strong>
                    </div>
                    <div className='invoice-table__table-cell invoice-table__footer__total-value'>
                        <strong>${this.getNetTotal().toFixed(2)}</strong>
                    </div>
                    <div className='invoice-table__table-cell invoice-table__footer__total-value'>
                        <strong>=</strong>
                    </div>
                </div>
            </div>
        );
    }
}

InvoiceTableFooter.defaultProps = {
    items: [],
    fees: 0,
    feePercent: 0
};

InvoiceTableFooter.propTypes = {
    items: PropTypes.array.isRequired,
    fees: PropTypes.number,
    feePercent: PropTypes.number
};
