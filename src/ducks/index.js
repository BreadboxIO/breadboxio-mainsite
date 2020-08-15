import { combineReducers } from 'redux';
import clientDuck from './client';
import invoiceItemsDuck from './invoice-items';

const Reducers = combineReducers({
  clientState: clientDuck,
  invoiceItemsState: invoiceItemsDuck,
});

export default Reducers;
