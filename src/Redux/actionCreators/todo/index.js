import {getTodos} from '../../../services/Apis/common.service';
import {todoList, todoListLoading} from '../../actions';

export const getAllTodoList = () => async dispatch => {
  // const dispatch = useDispatch();
  try {
    dispatch(todoListLoading(true));
    let resp = await getTodos();
    if (resp) {
      dispatch(todoList(resp));
      dispatch(todoListLoading(false));
    } else {
      dispatch(todoListLoading(false));
    }
  } catch (error) {
    dispatch(todoListLoading(false));
  }
};
