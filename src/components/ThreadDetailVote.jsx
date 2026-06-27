import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import {
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncNeutralVoteThreadDetail,
} from '../redux/threadDetail/action';

function ThreadDetailVote({ thread }) {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.authUser);
  const hasUpVoted = thread.upVotesBy.includes(authUser?.id);
  const hasDownVoted = thread.downVotesBy.includes(authUser?.id);

  function onUpVote() {
    if (!authUser) return;
    if (hasUpVoted) {
      dispatch(asyncNeutralVoteThreadDetail(thread.id));
    } else {
      dispatch(asyncUpVoteThreadDetail(thread.id));
    }
  }

  function onDownVote() {
    if (!authUser) return;
    if (hasDownVoted) {
      dispatch(asyncNeutralVoteThreadDetail(thread.id));
    } else {
      dispatch(asyncDownVoteThreadDetail(thread.id));
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={onUpVote}
        style={{
          color: hasUpVoted ? 'green' : 'black',
        }}
      >
        👍 {thread.upVotesBy.length}
      </button>

      {' '}

      <button
        type="button"
        onClick={onDownVote}
        style={{
          color: hasDownVoted ? 'red' : 'black',
        }}
      >
        👎 {thread.downVotesBy.length}
      </button>
    </div>
  );
}

ThreadDetailVote.propTypes = {
  thread: PropTypes.object.isRequired,
};

export default ThreadDetailVote;