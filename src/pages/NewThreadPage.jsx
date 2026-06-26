import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import ThreadInput from '../components/ThreadInput';
import { asyncAddThread } from '../redux/threads/action';
import '../NewThread.css';

function NewThreadPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onAddThread({
    title,
    body,
    category,
  }) {
    dispatch(
      asyncAddThread({
        title,
        body,
        category,
      }),
    );
    navigate('/');
  }

  return (
    <section className="utas-newthread">
      <div className="utas-newthread-header">
        <p className="utas-newthread-eyebrow">MULAI DISKUSI</p>
        <h2 className="utas-newthread-title">Buat Thread Baru</h2>
        <p className="utas-newthread-subtitle">
          Tulis dengan jelas supaya diskusi makin seru dan mudah diikuti.
        </p>
      </div>

      <ThreadInput
        addThread={onAddThread}
      />
    </section>
  );
}

export default NewThreadPage;