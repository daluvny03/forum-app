import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PostedAt from './PostedAt';
import '../Home.css';

function ThreadItem({
  thread,
  owner,
}) {
  const initial = owner?.name ? owner.name.charAt(0).toUpperCase() : '?';
  return (
    <article className="utas-thread-card">
      <h3 className="utas-thread-title">
        <Link to={`/threads/${thread.id}`}>
          {thread.title}
        </Link>
      </h3>
      <div
        className="utas-thread-body"
        dangerouslySetInnerHTML={{
          __html: thread.body,
        }}
      />
      <div className="utas-thread-meta">
        <div className="utas-thread-owner">
          {owner?.avatar ? (
            <img
              src={owner.avatar}
              alt={owner.name}
              className="utas-thread-avatar"
            />
          ) : (
            <span className="utas-thread-avatar utas-thread-avatar-fallback">
              {initial}
            </span>
          )}
          <span className="utas-thread-owner-name">{owner?.name ?? 'Pengguna'}</span>
        </div>
        <span className="utas-thread-dot" aria-hidden="true">•</span>
        <PostedAt date={thread.createdAt} />
        <span className="utas-thread-dot" aria-hidden="true">•</span>
        <span className="utas-thread-comments">{thread.totalComments} Komentar</span>
        <span className="utas-thread-category">#{thread.category}</span>
      </div>
    </article>
  );
}

ThreadItem.propTypes = {
  thread: PropTypes.object.isRequired,
  owner: PropTypes.object,
};

export default ThreadItem;