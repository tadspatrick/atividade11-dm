import { combineReducers } from 'redux';
import CreateReducer from './CreateReducer';

const Reducers = combineReducers({
    create: CreateReducer,
})

export default Reducers;