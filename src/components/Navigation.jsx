import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../navbar.css';
import { useSelector, useDispatch } from 'react-redux';
import { asyncUnsetAuthUser } from '../redux/auth/action';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const authUser = useSelector(
   (state) => state.authUser
  );
  const dispatch = useDispatch();
  function onlogout(){
    dispatch(asyncUnsetAuthUser());
    navigate('/');
  };
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  return (
    <nav className="utas-nav">
      <div className="utas-nav-inner">
        <Link to="/" className="utas-nav-brand" onClick={closeMenu}>
          Utas<span className="utas-nav-dot">.</span>
        </Link>

        <svg className="utas-nav-thread" viewBox="0 0 80 20" aria-hidden="true">
          <path d="M2 10 C 20 0, 30 20, 48 8 S 70 18, 78 10" stroke="#3FA796" strokeWidth="1.5" strokeDasharray="3 5" fill="none" />
        </svg>

        <button
          type="button"
          className="utas-nav-toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Buka menu navigasi"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`utas-nav-menu ${isOpen ? 'is-open' : ''}`}>
          <ul className="utas-nav-links">
            <li>
              <NavLink to="/" end className="utas-nav-link" onClick={closeMenu}>
                Beranda
              </NavLink>
            </li>
          </ul>
          {
            authUser === null ? (
              <div className="utas-nav-actions">
                <NavLink to="/login" className="utas-nav-login" onClick={closeMenu}>
                  Masuk
                </NavLink>
                <NavLink to="/register" className="utas-nav-register" onClick={closeMenu}>
                  Daftar
                </NavLink>
              </div>
            ) : (
              <div className="utas-nav-actions">
                <NavLink className="utas-nav-logout" onClick={onlogout}>
                  Keluar dari akun ini
                </NavLink>
                <NavLink to="/new" className="utas-nav-new" onClick={closeMenu}>
                  + Thread
                </NavLink>
                <NavLink to="/leaderboard" className="utas-nav-new" onClick={closeMenu}>
                  Leaderboard
                </NavLink>
              </div>
            )
          }
        </div>
      </div>
    </nav>
  );
}

export default Navbar;