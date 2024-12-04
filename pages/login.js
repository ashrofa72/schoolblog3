import React, { useState } from 'react';
import styles from '../styles/login.module.css';
import { useRouter } from 'next/router';
import { Form, Alert } from 'react-bootstrap';

import { useUserAuth } from '../context/UserAuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { logIn, googleSignIn } = useUserAuth();
  const { user } = useUserAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await logIn(email, password);
      router.push('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      router.push('/blogs');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h2>تسجيل دخول النظام</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className={styles.formgroup} controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group
            className={styles.formgroup}
            controlId="formBasicPassword"
          >
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className={styles.butarea}>
            <button className={styles.buttons} type="Submit">
              تسجيل دخول بالإيميل
            </button>
          </div>
        </Form>
        <hr />

        <div className={styles.butarea}>
          <button
            className={styles.buttons}
            onClick={(e) => router.push('/phonesignup')}
          >
            تسجيل دخول برقم الموبايل
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
