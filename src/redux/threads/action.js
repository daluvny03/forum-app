import { getAllThreads, getAllUsers, createThread } from "../../utils/api";
import { receiveUsersActionCreator } from "../users/action";

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

function asyncAddThread({
  title,
  body,
  category
  }){
    return async(dispatch)=>{
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
  }
}

export {
    ActionType,
    receiveThreadsActionCreator,
    asyncPopulateThreads,
    addThreadActionCreator,
    asyncAddThread,
}