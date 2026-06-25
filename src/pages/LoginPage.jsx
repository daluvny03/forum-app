import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthLayout from './AuthLayout';
import LoginInput from '../components/LoginInput'
import { asyncSetAuthUser } from '../redux/auth/action';
import '../auth.css';

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit({ email, password }) {
    setIsSubmitting(true);
    try {
      await dispatch(asyncSetAuthUser({ email, password }));
      navigate('/');
    } catch (error) {
      console.error(error);
      alert(error.message || 'Gagal masuk');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <AuthLayout mode="login">
      <LoginInput login={onSubmit} isSubmitting={isSubmitting} />
    </AuthLayout>
  );
}

export default LoginPage;