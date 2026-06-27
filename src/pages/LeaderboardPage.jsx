import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LeaderboardList from '../components/LeaderboardList';
import { asyncPopulateLeaderboards } from '../redux/leaderboard/action';
import Loading from '../components/loading';

function LeaderboardPage() {
  const dispatch = useDispatch();

  const leaderboards = useSelector(
    (state) => state.leaderboards,
  );
  const isLoading = useSelector((state)=>state.loading);

  useEffect(() => {
    dispatch(asyncPopulateLeaderboards());
  }, [dispatch]);
  if (isLoading){
    return <Loading />
  }
  return (
    <section>
      <h2>Leaderboard</h2>
      <LeaderboardList
        leaderboards={leaderboards}
      />
    </section>
  );
}

export default LeaderboardPage;