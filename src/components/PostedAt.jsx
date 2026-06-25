import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/id';

dayjs.extend(relativeTime);
dayjs.locale('id');

function PostedAt({ date }) {
  return (
    <span>
      {dayjs(date).fromNow()}
    </span>
  );
}

PostedAt.propTypes = {
  date: PropTypes.string.isRequired,
};

export default PostedAt;