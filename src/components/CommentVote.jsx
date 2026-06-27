import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralVoteComment,
} from '../redux/threadDetail/action';

function CommentVote({
  threadId,
  comment,
}) {
  const dispatch = useDispatch();
  const authUser = useSelector(
    (state) => state.authUser,
  );
  const hasUpVoted =
    comment.upVotesBy.includes(authUser?.id);
  const hasDownVoted =
    comment.downVotesBy.includes(authUser?.id);
  function onUpVote() {
    if (!authUser) return;
    if (hasUpVoted) {
      dispatch(
        asyncNeutralVoteComment(
          threadId,
          comment.id,
        ),
      );
    } else {
      dispatch(
        asyncUpVoteComment(
          threadId,
          comment.id,
        ),
      );
    }
  }

  function onDownVote() {
    if (!authUser) return;
    if (hasDownVoted) {
      dispatch(
        asyncNeutralVoteComment(
          threadId,
          comment.id,
        ),
      );
    } else {
      dispatch(
        asyncDownVoteComment(
          threadId,
          comment.id,
        ),
      );
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
        👍 {comment.upVotesBy.length}
      </button>
      {' '}

      <button
        type="button"
        onClick={onDownVote}
        style={{
          color: hasDownVoted ? 'red' : 'black',
        }}
      >
        👎 {comment.downVotesBy.length}
      </button>
    </div>
  );
}

CommentVote.propTypes = {
  threadId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
};

export default CommentVote;