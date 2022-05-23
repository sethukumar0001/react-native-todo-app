import {combineReducers} from 'redux';
import { todoListReducer} from './todoReducer';

const reducers = combineReducers({
  todos: todoListReducer,
});

export default reducers;
