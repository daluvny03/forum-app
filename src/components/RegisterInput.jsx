import PropTypes from 'prop-types';
import useInput from '../hooks/UseInput';
import { Link } from 'react-router-dom';

function RegisterInput({ register, isSubmitting }) {
    const [name, setName] = useInput('');
    const [email, setEmail] = useInput('');
    const [password, setPassword] = useInput('');

  function onSubmitHandler(event) {
    event.preventDefault();
    register({
      name,
      email,
      password,
    });
  }

  return (
    <form className="utas-form" onSubmit={onSubmitHandler}>
            <div className="utas-field">
              <label htmlFor="name">Nama</label>
              <input
                id="name"
                type="text"
                placeholder="Nama lengkap"
                value={name}
                onChange={setName}
                autoComplete="name"
                required
              />
            </div>
    
            <div className="utas-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="kamu@email.com"
                value={email}
                onChange={setEmail}
                autoComplete="email"
                required
              />
            </div>
    
            <div className="utas-field">
              <label htmlFor="password">Kata sandi</label>
              <input
                id="password"
                type="password"
                placeholder="Minimal 6 karakter"
                value={password}
                onChange={setPassword}
                autoComplete="new-password"
                minLength={6}
                required
              />
            </div>
    
            <button type="submit" className="utas-btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Memproses…' : 'Buat akun'}
              <span aria-hidden="true" className="utas-btn-arrow">→</span>
            </button>
    
            <p className="utas-switch">
              Sudah punya akun? <Link to="/login">Masuk di sini</Link>
            </p>
          </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};

export default RegisterInput;
