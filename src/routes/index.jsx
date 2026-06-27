import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// 1. Impor semua halaman dari folder pages
import HomePage from '../pages/HomePage'; // sesuaikan dengan nama file Anda
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
      {/* Jika Anda punya Navbar/Header yang ingin muncul di semua halaman, taruh di sini */}
      
      <Routes>
        {/* 2. Tentukan path/URL untuk masing-masing halaman */}
        
        {/* Halaman Utama (URL: / ) */}
        <Route path="/" element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        } /> 
        
        {/* Halaman Login (URL: /login ) */}
        <Route path="/login" element={
          <GuestRoute>
            <Login />
          </GuestRoute>
        } />
        
        {/* Halaman Register (URL: /register ) */}
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
        {/* Halaman Leaderboard (URL: /leaderboard ) */}
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
        
        {/* Halaman Solusi jika user mengetik URL yang salah (404 Not Found) */}
        <Route path="*" element={<h1>Halaman Tidak Ditemukan (404)</h1>} />
      </Routes>
    </Router>
    </>
  );
}

export default AppRoutes;