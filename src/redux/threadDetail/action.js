import { getThreadDetail, createComment } from '../../utils/api';

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
    const threadDetail = await getThreadDetail(threadId);
    dispatch(receiveThreadDetailActionCreator(threadDetail));
  };
}

function asyncAddComment({
  threadId,
  content,
  }){
    return async(dispatch)=>{
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
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  asyncPopulateThreadDetail,
  addCommentActionCreator,
  asyncAddComment,
};
