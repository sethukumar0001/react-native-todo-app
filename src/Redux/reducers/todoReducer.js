import {ActionType} from '../constants/actionType';

const initialState = {
  todoList: [],
  todoLoading: false,
};

export const todoListReducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case ActionType.TODO_LOADING:
      return {...state, todoLoading: action.payload};
    case ActionType.TODO_LIST:
      return {...state, todoList: action.payload};
    default:
      return state;
  }
};
