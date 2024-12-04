import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/ImageUpload.module.css';

export default function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadStatus('Please select a file.');
      return;
    }

    setUploadStatus('Uploading...');

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('upload_preset', 'uploads');

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dokbli55y/image/upload`,
        formData
      );

      console.log(response.data);

      setUploadStatus('Upload completed.');
    } catch (error) {
      console.error('Error uploading image:', error);
      setUploadStatus('Upload failed.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formcontainer}>
        <h1>Image Upload To Cloudinary</h1>
        <input
          type="file"
          onChange={handleFileChange}
          className={styles.fileInput}
        />
        <button onClick={handleUpload} className={styles.uploadButton}>
          Upload
        </button>
        <p className={styles.uploadStatus}>{uploadStatus}</p>
      </div>
    </div>
  );
}
