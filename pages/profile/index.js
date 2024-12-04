import React, { useState } from 'react';
import styles from '../../styles/profile.module.css';
import { useUserAuth } from '../../context/UserAuthContext';
import { auth } from '../../config/firebase';

const Profile = () => {
  const { user } = useUserAuth();
  const [usermobile, setuserMobile] = useState([]);
  const handleuser = () => {
    const user = auth.currentUser;
    if (user) {
      const { displayName, phoneNumber } = user;
      console.log('Display Name:', displayName);
      console.log('Phone Number:', phoneNumber);
    } else {
      console.log('User not logged in');
    }
  };
  const handlesearch = async (mobile) => {
    //alert('wait')

    const response = await fetch(`/api/mobileSearch?mobile=${mobile}`);
    const data = await response.json();
    const mobiles = JSON.parse(JSON.stringify(data.message));
    setuserMobile(mobiles);
    console.log(data.message);
  };
  return (
    <div className={styles.container}>
      <h1 style={{ fontFamily: 'Almarai' }} className="text-3xl text-center">
        بيانات تسجيل الدخول لصاحب الحساب
      </h1>
      <div>
        {user.email ? (
          <h2>Email: {user.email}</h2>
        ) : (
          <h2>No user email available.</h2>
        )}
      </div>
      <div>
        {user.displayName ? (
          <h2>Display Name: {user.displayName}</h2>
        ) : (
          <h2>No user display Name available.</h2>
        )}
      </div>
      <div>
        {user.phoneNumber ? (
          <h2>Mobile: {user.phoneNumber}</h2>
        ) : (
          <h2>No user Mobile available.</h2>
        )}
      </div>
      <div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handlesearch(user.phoneNumber)}
        >
          إظهار بياناتك
        </button>
      </div>
      <div className={styles.searchdata}>
        {usermobile.map((user, i) => (
          <div key={i}>
            <h2>User Email: {user.email}</h2>
            <p>User DisplayName: {user.displayName}</p>
            <p>User National ID: {user.nationalId}</p>
            <p>User Mobile: {user.mobile}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
