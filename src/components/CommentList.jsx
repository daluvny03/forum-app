import PropTypes from 'prop-types';
import CommentItem from './CommentItem';
import '../Detail.css';

function CommentList({ comments }) {
  if (comments.length === 0) {
    return (
      <p className="utas-comments-empty">
        Belum ada komentar. Jadilah yang pertama menanggapi!
      </p>
    );
  }

  return (
    <div className="utas-comment-list">
      {
        comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
          />
        ))
      }
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentList;