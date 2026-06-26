import PropTypes from 'prop-types';
import PostedAt from './PostedAt';
import '../Detail.css';

function CommentItem({ comment }) {
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
};

export default CommentItem;