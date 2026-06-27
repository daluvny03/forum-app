import PropTypes from 'prop-types';

function LeaderboardItem({ leaderboard, rank }) {
  const { user, score } = leaderboard;

  return (
    <article
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <img
          src={user.avatar}
          alt={user.name}
          width="45"
          height="45"
          style={{
            borderRadius: '50%',
          }}
        />
        <strong>
          {user.name}
        </strong>
      </div>
      <strong>
        ⭐ {score}
      </strong>
      <h2>
        #{rank}
      </h2>
    </article>
  );
}

LeaderboardItem.propTypes = {
  leaderboard: PropTypes.object.isRequired,
  rank: PropTypes.number.isRequired,
};

export default LeaderboardItem;