import { combineReducers } from 'redux';
import invoiceItemsDuck from './invoice-items';
import { routerReducer } from 'react-router-redux';

const Reducers = combineReducers({
    router: routerReducer,
    invoiceItemsState: invoiceItemsDuck
});

export default Reducers;
