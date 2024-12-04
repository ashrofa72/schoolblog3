import React from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import styles from '../styles/getsave.module.css';

const DataList = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'myblog-58b10'));
      const dataList = [];

      querySnapshot.forEach((doc) => {
        dataList.push({ id: doc.id, ...doc.data() });
      });

      setData(dataList);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className="text-3xl text-center mt-5">بيانات المسجلين على المنصة</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>National ID</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.formData.id}>
              <td>{item.formData.displayName}</td>
              <td>{item.formData.mobile}</td>
              <td>{item.formData.nationalId}</td>
              <td>{item.formData.email}</td>
              <td>{item.formData.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataList;
