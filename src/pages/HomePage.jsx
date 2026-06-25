import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { asyncPopulateThreads } from '../redux/threads/action';
import ThreadList from '../components/ThreadList';

function HomePage() {
  const dispatch = useDispatch();

  const threads = useSelector((state) => state.threads);
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(asyncPopulateThreads());
  }, [dispatch]);

  return (
    <section>
      <h2>Diskusi Terbaru</h2>

      <ThreadList
        threads={threads}
        users={users}
      />
    </section>
  );
}

export default HomePage;