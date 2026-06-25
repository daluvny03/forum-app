import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from './AuthLayout';
import { asyncRegisterUser } from '../redux/auth/action';
import '../auth.css';
import RegisterInput from '../components/RegisterInput';

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit({ name, email, password }) {
    setIsSubmitting(true);
    try {
      await dispatch(asyncRegisterUser({ name, email, password }));
      navigate('/login');
    } catch (error) {
      console.error(error);
      alert(error.message || 'Gagal mendaftar');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <AuthLayout mode="register">
      <RegisterInput register={onSubmit} isSubmitting={isSubmitting}/>
    </AuthLayout>
  );
}

export default RegisterPage;