import { createAction, handleActions } from 'redux-actions';

import { InvoiceItem } from '../classes/invoice-item';

export const selectInvoiceItems = state => state.invoiceItemsState.data;

const DEFAULT_STATE = {
    data: [ new InvoiceItem(), new InvoiceItem(), new InvoiceItem(), new InvoiceItem() ]
};

const RESET = 'invoice-items/RESET';

export default handleActions(
    {
        [RESET]: state => Object.assign({}, state, DEFAULT_STATE),
    },
    DEFAULT_STATE
);

export const resetInvoiceItems = createAction(RESET);
