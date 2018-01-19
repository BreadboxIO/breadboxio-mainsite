import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import testDuck from './test';

const Reducers = combineReducers({
    router: routerReducer,
    testState: testDuck
});

export default Reducers;
