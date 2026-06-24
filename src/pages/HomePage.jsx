import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncReceiveThreads } from '../redux/threads/action';



function HomePage() {
    const threads = useSelector(
      (states) => states.threads
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
        asyncReceiveThreads()
        );
    }, [dispatch]);
    console.log(threads);
  return <h1>Home Page</h1>;
}

export default HomePage;