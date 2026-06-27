import PropTypes from 'prop-types';
import CommentList from './CommentList';
import PostedAt from './PostedAt';
import '../Detail.css';
import CommentInput from './CommentInput';
import ThreadDetailVote from './ThreadDetailVote';

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

      <ThreadDetailVote
        thread={thread}
      />

      <div className="utas-detail-divider" aria-hidden="true" />

      <section className="utas-comments-section">
        <h2 className="utas-comments-heading">
          💬 {thread.comments.length} Komentar
        </h2>
        <CommentInput
            addComment={addComment}
        />
        <CommentList ThreadId={thread.id} comments={thread.comments} />
      </section>
    </article>
  );
}

ThreadDetail.propTypes = {
  thread: PropTypes.object.isRequired,
};

export default ThreadDetail;