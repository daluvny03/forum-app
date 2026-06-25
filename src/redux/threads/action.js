import { getAllThreads, getAllUsers } from "../../utils/api";
import { receiveUsersActionCreator } from "../users/action";

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',

};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function asyncPopulateThreads() {
  return async (dispatch) => {
    const threads = await getAllThreads();
    const users = await getAllUsers();
    dispatch(
      receiveThreadsActionCreator(
        threads,
      ),
    );
    dispatch(
      receiveUsersActionCreator(
        users,
      ),
    );
  };
}

export {
    ActionType,
    receiveThreadsActionCreator,
    asyncPopulateThreads,
}