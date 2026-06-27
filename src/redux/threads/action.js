import { getAllThreads, getAllUsers, createThread, upVoteThread,
  downVoteThread,
  neutralVoteThread, } from "../../utils/api";
import { receiveUsersActionCreator } from "../users/action";
import { showLoadingActionCreator, hideLoadingActionCreator } from "../loading/action";

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  UP_VOTE_THREAD: 'UP_VOTE_THREAD',
  DOWN_VOTE_THREAD: 'DOWN_VOTE_THREAD',
  NEUTRAL_VOTE_THREAD: 'NEUTRAL_VOTE_THREAD',
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

function upVoteThreadActionCreator(threadId, userId) {
  return {
    type: ActionType.UP_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function downVoteThreadActionCreator(threadId, userId) {
  return {
    type: ActionType.DOWN_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function neutralVoteThreadActionCreator(threadId, userId) {
  return {
    type: ActionType.NEUTRAL_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
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

function asyncUpVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(
      upVoteThreadActionCreator(
        threadId,
        authUser.id,
      ),
    );
    try {
      await upVoteThread(threadId);
    } catch (error) {
      dispatch(
        neutralVoteThreadActionCreator(
          threadId,
          authUser.id,
        ),
      );
      alert(error.message);
    }
  };
}

function asyncDownVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(
      downVoteThreadActionCreator(
        threadId,
        authUser.id,
      ),
    );
    try {
      await downVoteThread(threadId);
    } catch (error) {
      dispatch(
        neutralVoteThreadActionCreator(
          threadId,
          authUser.id,
        ),
      );
      alert(error.message);
    }
  };
}

function asyncNeutralVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(
      neutralVoteThreadActionCreator(
        threadId,
        authUser.id,
      ),
    );
    try {
      await neutralVoteThread(threadId);
    } catch (error) {
      dispatch(
        upVoteThreadActionCreator(
          threadId,
          authUser.id,
        ),
      );
      alert(error.message);
    }
  };
}

export {
    ActionType,
    receiveThreadsActionCreator,
    asyncPopulateThreads,
    addThreadActionCreator,
    asyncAddThread,
    asyncDownVoteThread,
    asyncNeutralVoteThread,
    asyncUpVoteThread,
}