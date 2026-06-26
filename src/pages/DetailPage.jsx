import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  asyncPopulateThreadDetail,
  clearThreadDetailActionCreator,
  asyncAddComment,
} from '../redux/threadDetail/action';

import ThreadDetail from '../components/ThreadDetail';
import '../Detail.css';

function DetailPage() {
  function onAddComment({ content }){
    dispatch(asyncAddComment({
      threadId:id,
      content,
    })
  );
}
  const { id } = useParams();
  const dispatch = useDispatch();
  const threadDetail = useSelector(
    (state) => state.threadDetail,
  );

  useEffect(() => {
    dispatch(asyncPopulateThreadDetail(id));
    return () => {
      dispatch(clearThreadDetailActionCreator());
    };
  }, [dispatch, id]);

  if (!threadDetail) {
    return (
      <div className="utas-detail-loading">
        <span className="utas-detail-loading-dot" aria-hidden="true" />
        Memuat utas…
      </div>
    );
  }

  return (
    <div className="utas-detail-page">
      <ThreadDetail thread={threadDetail} addComment={ onAddComment }/>
    </div>
  );
}

export default DetailPage;