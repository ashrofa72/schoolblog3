import { useEffect, useState } from 'react';
import styles from '../../styles/teachersdata.module.css';
import { connectToDatabase } from '../../utils/mongodb';

const TeacherData = ({ teachers }) => {
  return (
    <div className={styles.container}>
      <h1>بيانات المعلمين المسجلين على المنصة</h1>
      <div className={styles.tablearea}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>اسم المعلم</th>
              <th>الموبايل</th>
              <th>الوظيفة</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher._id}>
                <td>{teacher.name}</td>
                <td>{teacher.mobile}</td>
                <td>{teacher.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  // Connect to your MongoDB database

  // Access your collection
  const { db } = await connectToDatabase();
  const collection = db.collection('teachers');

  // Fetch data from the collection
  const teachers = await collection.find({}).toArray();

  // Close the connection to the database

  return {
    props: {
      teachers: JSON.parse(JSON.stringify(teachers)),
    },
  };
}

export default TeacherData;
