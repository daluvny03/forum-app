import PropTypes from 'prop-types';
import ThreadItem from './ThreadItem';

function ThreadList({ threads, users }) {
  return (
    <div>
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