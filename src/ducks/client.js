import { createAction, handleActions } from 'redux-actions';

export const selectClientCity = state => state.clientState.city;
export const selectClientName = state => state.clientState.name;
export const selectClientState = state => state.clientState.state;
export const selectClientStreetAddress = state => state.clientState.streetAddress;
export const selectClientZipCode = state => state.clientState.zipCode;

const DEFAULT_STATE = {
    city: '',
    name: '',
    state: '',
    streetAddress: '',
    zipCode: ''
};

const RESET = 'client/RESET';
const UPDATE = 'client/UPDATE';

export default handleActions(
    {
        [RESET]: state => Object.assign({}, state, DEFAULT_STATE),
        [UPDATE]: (state, action) => Object.assign({}, state, { [action.payload.key]: action.payload.value }),
    },
    DEFAULT_STATE
);

export const resetClient = createAction(RESET);
export const updateClient = createAction(UPDATE);
