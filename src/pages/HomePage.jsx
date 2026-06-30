import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { asyncPopulateThreads } from '../redux/threads/action';
import ThreadList from '../components/ThreadList';
import Loading from '../components/loading';
import '../Home.css';
import CategoryFilter from '../components/CategoryFilter';

function HomePage() {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState('');

  const threads = useSelector((state) => state.threads);
  const users = useSelector((state) => state.users);
  const isLoading = useSelector(state=>state.loading);
  const categories = [
    ...new Set(
      threads.map(
        (thread) => thread.category,
      ),
    ),
  ];
  const filteredThreads = selectedCategory ? threads.filter(
    (thread)=>
    thread.category===selectedCategory
    )
    : threads;

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
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <ThreadList threads={filteredThreads} users={users} />
    </section>
  );
}

export default HomePage;