import PropTypes from 'prop-types';
import ThreadItem from './ThreadItem';
import '../Home.css';

function ThreadList({ threads, users }) {
  if (!threads.length) {
    return (
      <div className="utas-thread-empty">
        <p>Belum ada utas di sini. Jadilah yang pertama memulai diskusi!</p>
      </div>
    );
  }
  return (
    <div className="utas-thread-list">
      {
        threads.map((thread) => {
          const owner = users.find(
            (user) => user.id === thread.ownerId,
          );
          return (
            <ThreadItem
              key={thread.id}
              thread={thread}
              owner={owner}
            />
          );
        })
      }
    </div>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
};

export default ThreadList;