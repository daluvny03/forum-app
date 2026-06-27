import { getAllThreads, getAllUsers, createThread } from "../../utils/api";
import { receiveUsersActionCreator } from "../users/action";
import { showLoadingActionCreator, hideLoadingActionCreator } from "../loading/action";

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',

};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}
function addThreadActionCreator(
  thread
    ){
    return{
    type:
    ActionType.ADD_THREAD,
    payload:{
    thread
    }
  }
}

function asyncPopulateThreads() {
  return async (dispatch) => {
    dispatch(showLoadingActionCreator());
    try {
      const threads =
        await getAllThreads();
      const users =
        await getAllUsers();
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
    } finally {
      dispatch(
        hideLoadingActionCreator(),
      );
    }
  };
}

function asyncAddThread({
  title,
  body,
  category
  }){
    return async(dispatch)=>{
      dispatch(showLoadingActionCreator());
      try {
        const thread = await createThread({
          title,
          body,
          category
        });
        dispatch(
          addThreadActionCreator(
          thread
          )
        );
      } finally {
        dispatch(hideLoadingActionCreator());
      }
  }
}

export {
    ActionType,
    receiveThreadsActionCreator,
    asyncPopulateThreads,
    addThreadActionCreator,
    asyncAddThread,
}