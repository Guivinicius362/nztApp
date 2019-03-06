import { combineReducers } from 'redux';
import homeReducer from '../containers/home/reducers';
export default combineReducers({ login: () => [], home: homeReducer });
