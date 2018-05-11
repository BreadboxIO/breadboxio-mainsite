import clientDuck from './client';
import { combineReducers } from 'redux';
import invoiceItemsDuck from './invoice-items';
import { routerReducer } from 'react-router-redux';

const Reducers = combineReducers({
    clientState: clientDuck,
    invoiceItemsState: invoiceItemsDuck,
    router: routerReducer
});

export default Reducers;
