import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import {
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeutralVoteThread,
} from '../redux/threads/action';

function ThreadVote({ thread }) {
  const dispatch = useDispatch();

  const authUser = useSelector(
    (state) => state.authUser,
  );
  const hasUpVoted = thread.upVotesBy.includes(
    authUser?.id,
  );
  const hasDownVoted = thread.downVotesBy.includes(
    authUser?.id,
  );

  function onUpVote() {
    if (!authUser) return;
    if (hasUpVoted) {
      dispatch(
        asyncNeutralVoteThread(thread.id),
      );
    } else {
      dispatch(
        asyncUpVoteThread(thread.id),
      );
    }
  }

  function onDownVote() {
    if (!authUser) return;
    if (hasDownVoted) {
      dispatch(
        asyncNeutralVoteThread(thread.id),
      );
    } else {
      dispatch(
        asyncDownVoteThread(thread.id),
      );
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={onUpVote}
        style={{
            color:
            hasUpVoted
                ? 'green'
                : 'black',
        }}
    >
    👍
    {thread.upVotesBy.length}
    </button>
      {' '}
      <button
        type="button"
        onClick={onDownVote}
        style={{
            color:
            hasDownVoted
                ? 'red'
                : 'black',
        }}
    >
    👎
    {thread.downVotesBy.length}
      </button>
    </div>
  );
}

ThreadVote.propTypes = {
  thread: PropTypes.object.isRequired,
};

export default ThreadVote;