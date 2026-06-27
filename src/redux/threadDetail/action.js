import { getThreadDetail, createComment } from '../../utils/api';
import { showLoadingActionCreator, hideLoadingActionCreator } from "../loading/action";

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  ADD_COMMENT: 'ADD_COMMENT',
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

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  asyncPopulateThreadDetail,
  addCommentActionCreator,
  asyncAddComment,
};
