import React from 'react';
import { Link } from 'react-router-dom';
import '../Auth.css';

// Konten kartu thread di panel kiri hanya dekoratif (mock data),
// tidak terhubung ke store — aman dipakai apa adanya.
const mockThreads = [
  { id: 1, title: 'Kenapa state management itu penting?', author: 'Dinda', replies: 24 },
  { id: 2, title: 'Tips lolos review submission pertama', author: 'Raka', replies: 58 },
  { id: 3, title: 'Diskusi: Redux vs Context API', author: 'Sari', replies: 12 },
];

function AuthLayout({ mode, children }) {
  return (
    <div className="utas-page">
      <aside className="utas-ink">
        <div className="utas-ink-content">
          <p className="utas-wordmark">Utas.</p>
          <h1 className="utas-tagline">
            Satu utas,
            <br />
            banyak suara.
          </h1>
          <p className="utas-subtagline">
            Tempat berdiskusi, berbagi, dan belajar bareng komunitas.
          </p>
        </div>

        <div className="utas-thread-stack" aria-hidden="true">
          <svg
            className="utas-thread-line"
            viewBox="0 0 240 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 20 C 80 60, 10 100, 60 140 S 150 200, 90 260"
              stroke="#3FA796"
              strokeWidth="2"
              strokeDasharray="4 6"
              fill="none"
            />
          </svg>
          {mockThreads.map((t, i) => (
            <div
              className="utas-card"
              key={t.id}
              style={{ transform: `rotate(${i % 2 === 0 ? -3 : 2}deg)` }}
            >
              <div className="utas-card-top">
                <span className="utas-avatar">{t.author.charAt(0)}</span>
                <span className="utas-card-author">{t.author}</span>
              </div>
              <p className="utas-card-title">{t.title}</p>
              <span className="utas-card-replies">{t.replies} balasan</span>
            </div>
          ))}
        </div>
      </aside>

      <main className="utas-form-panel">
        <div className="utas-form-card">
          <nav className="utas-tabs" aria-label="Form autentikasi">
            <Link to="/login" className={`utas-tab ${mode === 'login' ? 'is-active' : ''}`}>
              MASUK
            </Link>
            <Link to="/register" className={`utas-tab ${mode === 'register' ? 'is-active' : ''}`}>
              DAFTAR
            </Link>
            <span
              className={`utas-tab-indicator ${mode === 'register' ? 'is-right' : ''}`}
              aria-hidden="true"
            />
          </nav>
          {children}
        </div>
      </main>
    </div>
  );
}

export default AuthLayout;