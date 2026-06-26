import PropTypes from 'prop-types';
import CommentList from './CommentList';
import PostedAt from './PostedAt';
import '../Detail.css';
import CommentInput from './CommentInput';

function ThreadDetail({ thread, addComment }) {
  return (
    <article className="utas-detail">
      <header className="utas-detail-header">
        <span className="utas-detail-category">#{thread.category}</span>
        <h1 className="utas-detail-title">{thread.title}</h1>

        <div className="utas-detail-owner">
          <img
            src={thread.owner.avatar}
            alt={thread.owner.name}
            className="utas-detail-avatar"
          />
          <div>
            <strong className="utas-detail-owner-name">{thread.owner.name}</strong>
            <PostedAt date={thread.createdAt} />
          </div>
        </div>
      </header>

      <div
        className="utas-detail-body"
        dangerouslySetInnerHTML={{
          __html: thread.body,
        }}
      />

      <div className="utas-detail-votes">
        <span className="utas-vote-pill utas-vote-up">👍 {thread.upVotesBy.length}</span>
        <span className="utas-vote-pill utas-vote-down">👎 {thread.downVotesBy.length}</span>
      </div>

      <div className="utas-detail-divider" aria-hidden="true" />

      <section className="utas-comments-section">
        <h2 className="utas-comments-heading">
          💬 {thread.comments.length} Komentar
        </h2>
        <CommentInput
            addComment={addComment}
        />
        <CommentList comments={thread.comments} />
      </section>
    </article>
  );
}

ThreadDetail.propTypes = {
  thread: PropTypes.object.isRequired,
};

export default ThreadDetail;