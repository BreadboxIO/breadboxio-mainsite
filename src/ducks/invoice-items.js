import { createAction, handleActions } from 'redux-actions';

import { InvoiceItem } from '../classes/invoice-item';

export const selectInvoiceItems = state => state.invoiceItemsState.data;

const DEFAULT_STATE = {
    data: [ new InvoiceItem() ]
};

const RESET = 'invoice-items/RESET';
const ADD = 'invoice-items/ADD';
const REMOVE = 'invoice-items/REMOVE';

export default handleActions(
    {
        [ADD]: state => {
            const { data } = state;
            const updatedData = [].concat(data, [ new InvoiceItem() ]);

            return Object.assign({}, state, { data: updatedData });
        },
        [REMOVE]: (state, action) => {
            const index = action.payload;
            const { data } = state;

            const updatedData = data.splice(index, 1);

            return Object.assign({}, state, { data: updatedData });
        },
        [RESET]: state => Object.assign({}, state, DEFAULT_STATE),
    },
    DEFAULT_STATE
);

export const resetInvoiceItems = createAction(RESET);
export const addInvoiceItem = createAction(ADD);
export const removeInvoiceItem = createAction(REMOVE);
