import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LeaderboardList from '../components/LeaderboardList';
import { asyncPopulateLeaderboards } from '../redux/leaderboard/action';
import Loading from '../components/loading';
import '../Leaderboard.css';

function LeaderboardPage() {
  const dispatch = useDispatch();

  const leaderboards = useSelector(
    (state) => state.leaderboards,
  );
  const isLoading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(asyncPopulateLeaderboards());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="utas-lb-page">
      <div className="utas-lb-header">
        <p className="utas-lb-eyebrow">PERINGKAT</p>
        <h2 className="utas-lb-title">Leaderboard</h2>
        <p className="utas-lb-subtitle">
          Pengguna paling aktif berkontribusi dalam diskusi komunitas.
        </p>
      </div>

      <LeaderboardList leaderboards={leaderboards} />
    </section>
  );
}

export default LeaderboardPage;