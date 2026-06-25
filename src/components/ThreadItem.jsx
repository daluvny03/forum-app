import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PostedAt from './PostedAt';

function ThreadItem({
  thread,
  owner,
}) {
  return (
    <article>
      <h3>
        <Link to={`/threads/${thread.id}`}>
          {thread.title}
        </Link>
      </h3>
      <div
        className="thread-body"
        dangerouslySetInnerHTML={{
            __html: thread.body,
        }}
        />
      <small>
        <img
            src={owner.avatar}
            alt={owner.name}
            width="35"
        />
        {' '}
        {owner?.name}
        {' • '}
        <PostedAt
          date={thread.createdAt}
        />
        {' • '}
        {thread.totalComments}
        {' Komentar '}
        <span>
            #{thread.category}
        </span>
      </small>
    </article>
  );
}

ThreadItem.propTypes = {
  thread: PropTypes.object.isRequired,
  owner: PropTypes.object,
};

export default ThreadItem;