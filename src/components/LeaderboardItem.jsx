import PropTypes from 'prop-types';
import '../Leaderboard.css';

// Medali + warna khusus untuk 3 besar
const RANK_MEDAL = { 1: '🥇', 2: '🥈', 3: '🥉' };
const RANK_CLASS = { 1: 'utas-lb-rank-gold', 2: 'utas-lb-rank-silver', 3: 'utas-lb-rank-bronze' };

function LeaderboardItem({ leaderboard, rank }) {
  const { user, score } = leaderboard;
  const medal = RANK_MEDAL[rank];
  const rankClass = RANK_CLASS[rank] ?? '';
  const initial = user?.name ? user.name.charAt(0).toUpperCase() : '?';

  return (
    <article className={`utas-lb-item ${rank <= 3 ? 'utas-lb-item-top' : ''}`}>
      <div className={`utas-lb-rank ${rankClass}`}>
        {medal ?? <span className="utas-lb-rank-number">{rank}</span>}
      </div>

      <div className="utas-lb-user">
        {user?.avatar ? (
          <img
            src={user.avatar}
            alt={user.name}
            className="utas-lb-avatar"
          />
        ) : (
          <span className="utas-lb-avatar utas-lb-avatar-fallback">
            {initial}
          </span>
        )}
        <span className="utas-lb-name">{user?.name ?? 'Pengguna'}</span>
      </div>

      <div className="utas-lb-score">
        <span className="utas-lb-score-value">{score?.toLocaleString('id-ID') ?? 0}</span>
        <span className="utas-lb-score-label">poin</span>
      </div>
    </article>
  );
}

LeaderboardItem.propTypes = {
  leaderboard: PropTypes.object.isRequired,
  rank: PropTypes.number.isRequired,
};

export default LeaderboardItem;