import { applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';
import Reducers from '../ducks/index';

export const configureStore = () => createStore(Reducers, applyMiddleware(thunk));
