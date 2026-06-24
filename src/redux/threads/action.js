import { getAllThreads } from "../../utils/api";

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

function asyncReceiveThreads() {
  return async (dispatch) => {
    const threads = await getAllThreads();
    dispatch(
      receiveThreadsActionCreator(
        threads,
      ),
    );
  };
}

export {
    ActionType,
    receiveThreadsActionCreator,
    asyncReceiveThreads,
}