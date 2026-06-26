import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useInput from '../hooks/UseInput';
import '../NewThread.css';

function ThreadInput({ addThread }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useInput('');

  function onSubmitHandler(event) {
    event.preventDefault();

    addThread({
      title,
      body,
      category,
    });
  }

  return (
    <form className="utas-compose-form" onSubmit={onSubmitHandler}>
      <input
        type="text"
        className="utas-compose-title"
        placeholder="Judul thread kamu…"
        value={title}
        onChange={onTitleChange}
        required
      />

      <div className="utas-compose-category">
        <span className="utas-compose-hash" aria-hidden="true">#</span>
        <input
          type="text"
          placeholder="kategori, cth: javascript"
          value={category}
          onChange={onCategoryChange}
          required
        />
      </div>

      <textarea
        className="utas-compose-body"
        placeholder="Tulis isi diskusimu di sini…"
        value={body}
        onChange={onBodyChange}
        rows="8"
        required
      />

      <div className="utas-compose-actions">
        <Link to="/" className="utas-compose-cancel">Batal</Link>
        <button type="submit" className="utas-btn-primary">
          Publikasikan Thread
          <span aria-hidden="true" className="utas-btn-arrow">→</span>
        </button>
      </div>
    </form>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;