import { applyMiddleware, createStore } from 'redux';

import Reducers from '../ducks/index';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

export const configureStore = history => createStore(Reducers, applyMiddleware(thunk, routerMiddleware(history)));
