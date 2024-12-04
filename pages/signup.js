import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Form, Alert } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useUserAuth } from '../context/UserAuthContext';
import { auth } from '../config/firebase';
import styles from '../styles/signup.module.css';
import { updateProfile } from 'firebase/auth';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');

  const [displayName, setDisplayName] = useState('');
  const { signUp } = useUserAuth();
  let router = useRouter();
  const { user } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signUp(email, password);

      updateProfile(auth.currentUser, {
        displayName: displayName,
      })
        .then(() => {
          // Profile updated!
          console.log('profile updated');
          // ...
        })
        .catch((error) => {
          // An error occurred
          // ...
        });

      router.push('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h2 className="mb-3">تسجيل حساب في المنصة</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className={styles.formgroup} controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="البريد الإلكتروني"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group
            className={styles.formgroup}
            controlId="formBasicPassword"
          >
            <Form.Control
              type="password"
              placeholder="كلمة المرور"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group
            className={styles.formgroup}
            controlId="formBasicPassword"
          >
            <Form.Control
              type="text"
              placeholder="اسم المستخدم"
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </Form.Group>

          <div className={styles.butarea}>
            <Button className={styles.buttons} variant="primary" type="Submit">
              تسجيل
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link href="/login">LogIn</Link>
      </div>
    </>
  );
};

export default Signup;
