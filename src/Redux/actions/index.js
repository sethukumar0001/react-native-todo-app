import {ActionType} from '../constants/actionType';

export const todoList = list => {
  return {
    type: ActionType.TODO_LIST,
    payload: list,
  };
};

export const todoListLoading = status => {
  return {
    type: ActionType.TODO_LOADING,
    payload: status,
  };
};
