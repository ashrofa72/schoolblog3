import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Form, Alert } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { useUserAuth } from '../context/UserAuthContext';
import styles from '../styles/phonesignup.module.css';

const PhoneSignUp = () => {
  const [error, setError] = useState('');
  const [number, setNumber] = useState('');
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState('');
  const [result, setResult] = useState('');
  const { setUpRecaptha } = useUserAuth();
  const router = useRouter();

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setError('');
    if (number === '' || number === undefined)
      return setError('Please enter a valid phone number!');
    try {
      const response = await setUpRecaptha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError('');
    if (otp === '' || otp === null) return;
    try {
      await result.confirm(otp);
      router.push('/savedata');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.container}>
      <h2>تسجيل الدخول برقم الموبايل</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={getOtp} style={{ display: !flag ? 'block' : 'none' }}>
        <Form.Group className={styles.formgroup} controlId="formBasicEmail">
          <PhoneInput
            defaultCountry="EG"
            value={number}
            onChange={setNumber}
            placeholder="Enter Phone Number"
          />
          <div id="recaptcha-container"></div>
        </Form.Group>
        <div className={styles.btnarea}>
          <Button
            className={styles.mybuttons}
            onClick={(e) => router.push('/')}
            variant="danger"
          >
            إلغاء
          </Button>

          <Button className={styles.mybuttons} type="submit" variant="primary">
            إرسال الرمز
          </Button>
        </div>
      </Form>

      <Form onSubmit={verifyOtp} style={{ display: flag ? 'block' : 'none' }}>
        <Form.Group className={styles.formgroup} controlId="formBasicOtp">
          <Form.Control
            type="otp"
            placeholder="Enter OTP"
            onChange={(e) => setOtp(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <div className={styles.btnarea}>
            <button
              className={styles.mybuttons}
              onClick={(e) => router.push('/')}
            >
              إلغاء
            </button>
            <button className={styles.mybuttons} type="submit">
              تأكيد الرمز
            </button>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};
export default PhoneSignUp;
