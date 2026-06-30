import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage'; 
import Login from '../pages/LoginPage';
import Register from '../pages/RegisterPage';
import ThreadDetail from '../pages/DetailPage';
import NewThreadPage from '../pages/NewThreadPage';
import LeaderboardPage from '../pages/LeaderboardPage';
import Loading from '../components/loading';
import Navbar from '../components/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPreloadProcess } from '../redux/loading/action';
import ProtectedRoute from '../components/ProtectedRoute';
import GuestRoute from '../components/GuestRoute';

function AppRoutes() {
  const dispatch = useDispatch();
  const isLoading = useSelector(
    (state) => state.loading
  );
  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);
  if (isLoading) {
    return <Loading />
  }
  return (
    <>
      
      <Router>
      <Navbar />
      
      <Routes>
        
        <Route path="/" element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        } /> 
        
        <Route path="/login" element={
          <GuestRoute>
            <Login />
          </GuestRoute>
        } />
        
        <Route path="/register" element={
          <GuestRoute>
            <Register />
          </GuestRoute>
        } />
        <Route
          path="/new"
          element={
            <ProtectedRoute>
              <NewThreadPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/leaderboard"
          element={
            <ProtectedRoute>
              <LeaderboardPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/threads/:id"
          element={
          <ProtectedRoute>
            <ThreadDetail />
          </ProtectedRoute>
          }
          />
        
        <Route path="*" element={<h1>Halaman Tidak Ditemukan (404)</h1>} />
      </Routes>
    </Router>
    </>
  );
}

export default AppRoutes;