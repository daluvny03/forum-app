import React from 'react';
// Impor file routes/index.jsx yang berisi konfigurasi router Anda
import AppRoutes from './routes/'; // sesuaikan path/jalurnya jika folder routes berada di tempat lain

function App() {
  return (
    <>
      {/* Cukup panggil komponen dari routes/index.jsx di sini */}
      <AppRoutes />
    </>
  );
}

export default App;