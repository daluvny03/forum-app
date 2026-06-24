import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      {/* Logo / Nama Aplikasi Placeholder */}
      <div>
        <Link to="/" >MyApps</Link>
      </div>

      {/* Menu Navigasi */}
      <ul>
        <li>
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="/login" >Login</Link>
        </li>
        <li>
          <Link to="/register" >Register</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
