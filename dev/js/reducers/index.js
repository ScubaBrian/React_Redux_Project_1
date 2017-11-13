import {combineReducers} from 'redux';
import UserReduce from './reducer-users';

const allReducers = combineReducers({
  users: UserReduce
});
export default allReducers;
