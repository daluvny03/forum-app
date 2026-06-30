import PropTypes from 'prop-types';
import LeaderboardItem from './LeaderboardItem';
import '../Leaderboard.css';

function LeaderboardList({ leaderboards }) {
  return (
    <div className="utas-lb-list">
      <div className="utas-lb-col-header" aria-hidden="true">
        <span>Pengguna</span>
        <span>Poin</span>
      </div>

      {leaderboards.map((leaderboard, index) => (
        <LeaderboardItem
          key={leaderboard.user.id}
          leaderboard={leaderboard}
          rank={index + 1}
        />
      ))}
    </div>
  );
}

LeaderboardList.propTypes = {
  leaderboards: PropTypes.array.isRequired,
};

export default LeaderboardList;