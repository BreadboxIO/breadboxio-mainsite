import React from 'react';

export const InvoiceTableHeading = () => {
    return (
        <div className='invoice-table__heading invoice-table__table-row'>
            <div className='invoice-table__heading__cell invoice-table__table-cell'>Hours</div>
            <div className='invoice-table__heading__cell invoice-table__table-cell'>Task Description</div>
            <div className='invoice-table__heading__cell invoice-table__table-cell'>Rate</div>
            <div className='invoice-table__heading__cell invoice-table__table-cell'>Line Total</div>
            <div className='invoice-table__heading__cell invoice-table__table-cell'>+</div>
        </div>
    );
};
