import { getThreadDetail,
   createComment, upVoteThread,
  downVoteThread,
  neutralVoteThread,
  upVoteComment,
  downVoteComment,
  neutralVoteComment, } from '../../utils/api';
import { showLoadingActionCreator, hideLoadingActionCreator } from "../loading/action";

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  ADD_COMMENT: 'ADD_COMMENT',

  UP_VOTE_THREAD_DETAIL: 'UP_VOTE_THREAD_DETAIL',
  DOWN_VOTE_THREAD_DETAIL: 'DOWN_VOTE_THREAD_DETAIL',
  NEUTRAL_VOTE_THREAD_DETAIL: 'NEUTRAL_VOTE_THREAD_DETAIL',

  UP_VOTE_COMMENT: 'UP_VOTE_COMMENT',
  DOWN_VOTE_COMMENT: 'DOWN_VOTE_COMMENT',
  NEUTRAL_VOTE_COMMENT: 'NEUTRAL_VOTE_COMMENT',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function addCommentActionCreator(
   comment
){
   return{
      type:
      ActionType.ADD_COMMENT,
      payload:{
         comment
      }
   };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function upVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.UP_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function downVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.DOWN_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function neutralVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.NEUTRAL_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function upVoteCommentActionCreator(commentId, userId) {
  return {
    type: ActionType.UP_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function downVoteCommentActionCreator(commentId, userId) {
  return {
    type: ActionType.DOWN_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function neutralVoteCommentActionCreator(commentId, userId) {
  return {
    type: ActionType.NEUTRAL_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function asyncPopulateThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoadingActionCreator());
    try {
      const threadDetail = await getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } finally {
      dispatch(hideLoadingActionCreator());
    }
  };
}

function asyncAddComment({
  threadId,
  content,
  }){
    return async(dispatch)=>{
      dispatch(showLoadingActionCreator());
      try {
        const comment= await createComment({
          threadId,
          content,
        });
        dispatch(
          addCommentActionCreator(
            comment
          )
        );
        dispatch(asyncPopulateThreadDetail(threadId));
      } finally {
        dispatch(hideLoadingActionCreator());
      }
    }
  };

  function asyncUpVoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(
      upVoteThreadDetailActionCreator(
        authUser.id,
      ),
    );
    try {
      await upVoteThread(threadId);
    } catch (error) {
      dispatch(
        neutralVoteThreadDetailActionCreator(
          authUser.id,
        ),
      );
      alert(error.message);
    }
  };
}

function asyncDownVoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(
      downVoteThreadDetailActionCreator(
        authUser.id,
      ),
    );
    try {
      await downVoteThread(threadId);
    } catch (error) {
      dispatch(
        neutralVoteThreadDetailActionCreator(
          authUser.id,
        ),
      );
      alert(error.message);
    }
  };
}

function asyncNeutralVoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(
      neutralVoteThreadDetailActionCreator(
        authUser.id,
      ),
    );
    try {
      await neutralVoteThread(threadId);
    } catch (error) {
      dispatch(
        upVoteThreadDetailActionCreator(
          authUser.id,
        ),
      );
      alert(error.message);
    }
  };
}

function asyncUpVoteComment(threadId, commentId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();

    dispatch(
      upVoteCommentActionCreator(
        commentId,
        authUser.id,
      ),
    );

    try {
      await upVoteComment(
        threadId,
        commentId,
      );
    } catch (error) {
      dispatch(
        neutralVoteCommentActionCreator(
          commentId,
          authUser.id,
        ),
      );

      alert(error.message);
    }
  };
}

function asyncDownVoteComment(threadId, commentId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();

    dispatch(
      downVoteCommentActionCreator(
        commentId,
        authUser.id,
      ),
    );

    try {
      await downVoteComment(
        threadId,
        commentId,
      );
    } catch (error) {
      dispatch(
        neutralVoteCommentActionCreator(
          commentId,
          authUser.id,
        ),
      );

      alert(error.message);
    }
  };
}

function asyncNeutralVoteComment(threadId, commentId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();

    dispatch(
      neutralVoteCommentActionCreator(
        commentId,
        authUser.id,
      ),
    );

    try {
      await neutralVoteComment(
        threadId,
        commentId,
      );
    } catch (error) {
      dispatch(
        neutralVoteCommentActionCreator(
          commentId,
          authUser.id,
        ),
      );

      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  asyncPopulateThreadDetail,
  addCommentActionCreator,
  asyncAddComment,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncNeutralVoteThreadDetail,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralVoteComment,
};
