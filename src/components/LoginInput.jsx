import PropTypes from 'prop-types';
import useInput from '../hooks/UseInput';
import { Link } from 'react-router-dom';

function LoginInput({ login, isSubmitting }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  function onSubmitHandler(event) {
    event.preventDefault();
    login({
      email,
      password,
    });
  }

  return (
    <form className="utas-form" onSubmit={onSubmitHandler}>
        <div className="utas-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="kamu@email.com"
            value={email}
            onChange={onEmailChange}
            autoComplete="email"
          />
        </div>

        <div className="utas-field">
          <label htmlFor="password">Kata sandi</label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={onPasswordChange}
          />
        </div>

        <button type="submit" className="utas-btn-primary" disabled={isSubmitting}>
          {isSubmitting ? 'Memproses…' : 'Masuk ke Utas'}
          <span aria-hidden="true" className="utas-btn-arrow">→</span>
        </button>

        <p className="utas-switch">
          Belum punya akun? <Link to="/register">Daftar di sini</Link>
        </p>
      </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};

export default LoginInput;