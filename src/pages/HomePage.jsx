import { useEffect } from 'react';
import { getAllThreads } from '../utils/api';

function HomePage() {
  useEffect(() => {
    getAllThreads()
      .then(console.log)
      .catch(console.error);
  }, []);

  return <h1>Home Page</h1>;
}

export default HomePage;