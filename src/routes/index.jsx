import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// 1. Impor semua halaman dari folder pages
import HomePage from '../pages/HomePage'; // sesuaikan dengan nama file Anda
import Login from '../pages/LoginPage';
import Register from '../pages/RegisterPage';
import Navbar from '../components/Navigation';

function App() {
  return (
    <>
      
      <Router>
      <Navbar />
      {/* Jika Anda punya Navbar/Header yang ingin muncul di semua halaman, taruh di sini */}
      
      <Routes>
        {/* 2. Tentukan path/URL untuk masing-masing halaman */}
        
        {/* Halaman Utama (URL: / ) */}
        <Route path="/" element={<HomePage />} />
        
        {/* Halaman Login (URL: /login ) */}
        <Route path="/login" element={<Login />} />
        
        {/* Halaman Register (URL: /register ) */}
        <Route path="/register" element={<Register />} />
        
        {/* Halaman Solusi jika user mengetik URL yang salah (404 Not Found) */}
        <Route path="*" element={<h1>Halaman Tidak Ditemukan (404)</h1>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;