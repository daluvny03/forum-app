import PropTypes from 'prop-types';
import LeaderboardItem from './LeaderboardItem';

function LeaderboardList({ leaderboards }) {
  return (
    <div>
      {
        leaderboards.map((leaderboard, index) => (
          <LeaderboardItem
            key={leaderboard.user.id}
            leaderboard={leaderboard}
            rank={index+1}
          />
        ))
      }
    </div>
  );
}

LeaderboardList.propTypes = {
  leaderboards: PropTypes.array.isRequired,
};

export default LeaderboardList;