import { useState } from 'react';
import firebase from 'firebase/app';
import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import styles from '../styles/savedata.module.css';
import Link from 'next/link';
import axios from 'axios';

import { useUserAuth } from '../context/UserAuthContext';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [mobile, setMobile] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const { user } = useUserAuth();

  const handleSubmitfirebase = async (e) => {
    e.preventDefault();

    // Save form data to Firebase Realtime Database
    const formData = {
      email,
      password,
      nationalId,
      mobile,
      displayName,
    };

    // save data
    await addDoc(collection(db, 'myblog-58b10'), {
      formData,
      uid: user.uid,
    });

    // Clear form fields after submission
    setEmail('');
    setPassword('');
    setNationalId('');
    setMobile('');
    setDisplayName('');
  };
  const handlesubmitmongodb = async (e) => {
    e.preventDefault();
    // fields check
    if (!email || !password || !nationalId || !mobile || !displayName)
      return setError('All fields are required');

    // post structure
    let userData = {
      email,
      password,
      nationalId,
      mobile,
      displayName,
      createdAt: new Date().toISOString(),
    };
    // save the post
    let response = await fetch('/api/studentinfo/', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
    // get the data
    let data = await response.json();

    if (data.success) {
      // reset the fields
      setEmail('');
      setPassword('');
      setNationalId('');
      setMobile('');
      setDisplayName('');
      // set the message
      return setMessage(data.message);
    } else {
      // set the error
      return setError(data.message);
    }
  };
  return (
    <div className={styles.container}>
      <h1 className="text-center">تسجيل بيانات المستخدم الجديد</h1>
      <div className="font-bold text-center underline">
        <Link href="/getdata">بيانات المسجلين</Link>
      </div>
      <div>
        {error ? (
          <div className="text-center text-red-500 font-bold">
            <h3 className={styles.error}>{error}</h3>
          </div>
        ) : null}
        {message ? (
          <div className="text-center text-green-500 font-bold ">
            <h3 className={styles.message}>{message}</h3>
          </div>
        ) : null}
      </div>
      <form onSubmit={handlesubmitmongodb} className={styles.form}>
        <div className={styles.formgroup}>
          <label>البريد الإلكتروني</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.formgroup}>
          <label>كلمة المرور</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.formgroup}>
          <label>الرقم القومي</label>
          <input
            type="text"
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <div className={styles.formgroup}>
          <label>التليفون</label>
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div className={styles.formgroup}>
          <label>اسم المستخدم</label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
