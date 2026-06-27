import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { asyncPopulateThreads } from '../redux/threads/action';
import ThreadList from '../components/ThreadList';
import Loading from '../components/loading';
import '../Home.css';

function HomePage() {
  const dispatch = useDispatch();

  const threads = useSelector((state) => state.threads);
  const users = useSelector((state) => state.users);
  const isLoading = useSelector(state=>state.loading);

  useEffect(() => {
    dispatch(asyncPopulateThreads());
  }, [dispatch]);
  if(isLoading){
    return <Loading />
  }

  return (
    <section className="utas-home">
      <div className="utas-home-header">
        <p className="utas-home-eyebrow">FORUM</p>
        <h2 className="utas-home-title">Diskusi Terbaru</h2>
        <p className="utas-home-subtitle">
          Ikuti percakapan yang sedang berlangsung, atau mulai utas barumu sendiri.
        </p>
      </div>

      <ThreadList threads={threads} users={users} />
    </section>
  );
}

export default HomePage;