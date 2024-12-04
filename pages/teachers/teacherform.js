import { useState } from 'react';
import axios from 'axios';
import styles from '../../styles/teacherform.module.css';

export default function Teachers() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [position, setPosition] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    // fields check
    if (!name || !mobile || !position)
      return setError('All fields are required');

    // post structure
    let TeacherData = {
      name,
      mobile,
      position,
      createdAt: new Date().toISOString(),
    };
    // save the post
    let response = await fetch('/api/addteachers/', {
      method: 'POST',
      body: JSON.stringify(TeacherData),
    });
    // get the data
    let data = await response.json();

    if (data.success) {
      // reset the fields
      setName('');
      setMobile('');
      setPosition('');
      // set the message
      return setMessage(data.message);
    } else {
      // set the error
      return setError(data.message);
    }
  };
  // ...

  return (
    <div className={styles.container}>
      <h1>إدخال بيانات المعلم الأساسية</h1>
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
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="name">
            اسم المعلم
          </label>
          <input
            className={styles.input}
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="mobile">
            رقم الموبايل
          </label>
          <input
            className={styles.input}
            type="text"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="position">
            الوظيفة على الكادر
          </label>
          <input
            className={styles.input}
            type="text"
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
        <button className={styles.button} type="submit">
          حفظ
        </button>
      </form>
    </div>
  );
}
