import PropTypes from 'prop-types';
import PostedAt from './PostedAt';
import '../Detail.css';
import CommentVote from './CommentVote';

function CommentItem({ threadId, comment }) {
  return (
    <article className="utas-comment-item">
      <div className="utas-comment-owner">
        <img
          src={comment.owner.avatar}
          alt={comment.owner.name}
          className="utas-comment-avatar"
        />
        <div>
          <strong className="utas-comment-owner-name">{comment.owner.name}</strong>
          <PostedAt date={comment.createdAt} />
        </div>
        <CommentVote
            threadId={threadId}
            comment={comment}
        />
      </div>
      <div
        className="utas-comment-content"
        dangerouslySetInnerHTML={{
          __html: comment.content,
        }}
      />
    </article>
  );
}

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired,
  threadId: PropTypes.string.isRequired,
};

export default CommentItem;