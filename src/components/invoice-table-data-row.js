import PropTypes from 'prop-types';
import React from 'react';

export const InvoiceTableDataRow = props => {
    const { hours, description, rate } = props;
    const total = rate * hours;

    return (
        <div className='invoice-table__data-row invoice-table__table-row'>
            <div className='invoice-table__row__cell invoice-table__table-cell'>{hours.toFixed(2)}</div>
            <div className='invoice-table__row__cell invoice-table__table-cell'>{description}</div>
            <div className='invoice-table__row__cell invoice-table__table-cell'>${rate.toFixed(2)}</div>
            <div className='invoice-table__row__cell invoice-table__table-cell'>${total.toFixed(2)}</div>
            <div className='invoice-table__row__cell invoice-table__table-cell'>+</div>
        </div>
    );
};

InvoiceTableDataRow.defaultProps = {
    hours: 0,
    description: 'Product Maintenance',
    rate: 100
};

InvoiceTableDataRow.propTypes = {
    hours: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired
};
